(function(define, require) {
  define('faye-client', ['jquery', 'event-emitter', 'faye', 'simple-storage'], function($, EventEmitter, Faye, SimpleStorage) {
    var connection = function(cached){

      // Determine the url for the Faye service. We'll default to Super Vision's production environment, but handle
      // Chip and super-vision-dev a little differently
      var href = ( window.top != window ) ? document.referrer : window.location.href;
      if(href.match(/vision=super/)) {
        document.cookie = "vision=super";
      };
      var faye_root = '';
     // if(href.match(/super-vision-dev\.pbskids\.org/)) {
     //   faye_root = 'http://super-vision-dev.pbskids.org:9000';
     // } else if(href.match(/chip\.pbskids\.org/)) {
     //   faye_root = 'http://chip.pbskids.org:8080';
     // } else if(href.match(/cosimo\.pbskids\.org/)) {
     //   faye_root = 'http://super-vision-dev.pbskids.org:9000';
     // } else if(document.cookie.match(/vision=super/)) {
	//faye_root = 'https://supervision.pbskids.org:9300';
     // } else if(href.match(/waldorf\.pbskids\.org/)) {
     //   faye_root = 'https://supervision.pbskids.org:9300';
     // } else if(href.match(/vision=super/)) {
     //   faye_root = 'https://supervision.pbskids.org:9300';
     // } else if(href.match(/[a-z]+\.pbskids\.org/i)) {
     //   faye_root = 'http://sv-broker-stg.pbskids.org:9100';
     // }
	
      var client = new Faye.Client(faye_root + '/faye');

      var channel, sync_state;

      /**
       * An extension that notifies listeners whenever any subscriptions (like a supervision app) begins listening on
       * a particular channel
       */
      client.addExtension({
        incoming: function(message, callback) {
          if (message.channel === '/meta/subscribe') {
            sync_state = message._channel;
            conn.emitEvent('subscribed', [message._channel]);
          }
          callback(message);
        }
      });

      /**
       * Retrieves a new sync, determining the correct origin to use based on the environment
       *
       * @return Deferred
       */
      var getNewChannel = function() {
        return $.ajax(faye_root + '/channel/create', {
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ origin: 'org.pbskids.WebSite' })
        });
      };

      var deferred = $.Deferred();

      /**
       * Callback for when a channel is created (or exists already), and a pairing between devices exists
       *
       * @param {Object} data The data received from the channel sync. Most importantly, this has the channel_id + sync code
       */
      var complete = function(data) {

        var self = this;
        channel = '/' + data.channel_id;

        SimpleStorage.set('channel-metadata', data);

        client.subscribe(channel, function(m) {
          self.emitEvent('message-received', [m]);

          if(m.type === 'status' && m.value === 'unpaired') {
            self.disconnect();
          }
        }).then(function() {
          self.emitEvent('paired', [sync_state]);
          self.isPaired = true;
        }, self.disconnect.bind(self));

        if(deferred.resolve) deferred.resolve(self);
      };

      /**
       * A wrapper class for sending information to Super Vision's Faye server, using the cached channel information
       *
       * @param {Object} config Any configuration to default the connection to
       * @extends EventEmitter
       */
      var Connection = function(config) {

        /**
         * Any configuration needed for the connection
         *
         * @param {Object} config
         */
        this.config = config;

        /**
         * Sends a message to the cached channel
         *
         * @param {Object} message The message to send
         */
        this.send = function(message, reliable) {
          reliable = reliable !== false;
          var payload = message;
          if (channel) {
            client.publish(channel, payload);
          }
        };

        /**
         * Registers a listener for a particular message type
         *
         * @param {String} message_type The type of message to listen to
         * @param {Function} callback The function to call when a message is received
         */
        this.recieve = function(message_type, callback) {
            client.subscribe(channel, function(data) {
                if (!!data._meta && 
                    !!data._meta.type && 
                    (data._meta.type == message_type)) {
                    callback(data);
                }
            });
        };

        /**
         * Manually unsubscribes a channel, without requesting a new one
         */
        this.forgetChannel = function() {
          if (channel) {
            client.unsubscribe(channel);
            channel = null;
          }
        };

        /**
         * Reestablishes a connection with the faye server, removing any existing subscriptions
         */
        this.refresh = function(){
          this.forgetChannel();

          var self = this;
          
          // retrieve a new channel and sync code, notifying listeners when the call finishes. Begin listening for
          // pairing events on the new faye channel, and finish establishing the connection once this has occurred
          getNewChannel(this.config.origin).then(function(res){
            self.emitEvent('init', [res]);
            client.subscribe('/' + res.channel_id, function(m) {
              if(m.value === 'paired') {
                complete.bind(self)(res);
              }
            });
          });
        };

        /**
         * Disconnect from any connected channels, and forget any "remembered" channels as well
         */
        this.disconnect = function() {
          // Notify faye that we're disconnecting
          client.publish(channel, {type: 'status', value: 'unpaired'});

          // Stop listening for things on the channel
          this.forgetChannel();

          // forget any cached channel data
          SimpleStorage.deleteKey('channel-metadata');
          
          // notify local listeners that the unpair has occurred
          this.emitEvent('unpaired');
          this.isPaired = false;
        };

        /**
         * Registers a listener for when the client has successfully connected to a faye channel AND another client
         * (like Super Vision) and is listening (a pairing, essentially).
         *
         * @param {Function} cb The callback to call when the client is ready
         */
        this.ready = function(cb) {
          // If a channel exists, go ahead and do the callback now
          if (channel) cb(sync_state);

          // Once the app is paired, notify the callback
          this.on('paired', function(sync_state) {
            cb(sync_state);
          });
        };

        /**
         * Registers a listener when this client has successfully connected to a faye channel
         *
         * TODO: EventEmitter if this.ready should pass in sync_state, since it isn't actually processed by extensions
         * yet at that point
         *
         * @param {Function} cb The callback to 
         */
        this.subscribed = function(cb) {
          this.on('subscribed', function(sync_state) {
            cb(sync_state);
          });
        };

        /**
         * Flag to turn on/off Faye functionality. Set to false for maintenance/updates. UI elements on pbskids.org
         * should react accordingly.
         *
         * @property {Boolean} enabled
         */
        this.enabled = true;
      };

      // The connection object "extends" EventEmitter.
      Connection.prototype = new EventEmitter();

      // Instantiate the connection that this factory method builds
      var conn = new Connection({});

      // If a channel connection already exists, go ahead and emit events
      var cachedChannel = SimpleStorage.get('channel-metadata');
      if (!!cachedChannel) {
        complete.bind(conn)(cachedChannel);
      }

      // return the "factoried" connection
      return conn;
    };

    // run the factory function and make the client global to be consumed
    PBS.KIDS.FayeClient = connection();
    return PBS.KIDS.FayeClient;
  });
}(PBS.KIDS.define, PBS.KIDS.require));
