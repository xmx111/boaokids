(function( require, define, factory ){
  if( typeof define === "function" && define.amd ){
    //PBS.KIDS AMD support for requireJS
    define('super-vision',
        ['jquery-noconflict', 'faye-client', 'lodash', 'messages', 'simple-storage', 'uuid'],
        function($, faye_client, _, Messages, SimpleStorage, UUID) {

            // Publicly accessible object for old producer headband.
            // Temporary, until everything is converted to AMD.
            PBS.KIDS.SuperVision = factory($, faye_client, _, Messages, SimpleStorage, UUID);

            return PBS.KIDS.SuperVision;
        }
    );
  }
  else {
    return;//"explicity do nothing" - Sam Deng
  }
}( PBS.KIDS.require, PBS.KIDS.define, function($, faye_client, _, Messages, SimpleStorage, UUID) {

    var SupervisionClient = function($, faye_client, _, Messages, SimpleStorage, UUID) {
        // The current status of a supervision sync session
        this.sync_state = null;

        // A nicer name for "that". Binds are ugly, and aren't supported in older browsers anyways
        var supervisionClient = this;

        var current_video_title = null;

        var game_message_token = null;
        var game_event_message_token = null;
        var video_message_token = null;
        var video_event_message_token = null;

        var sleep_timer = null;
        var video_view = null;
        var session_id = UUID.genV4().hexString + UUID.genV4().hexString;

        var deploy_play_timer = function(mode, countdown) {
            clearTimeout(sleep_timer);

            sleep_timer = setTimeout(function() {
                // Deploy overlay
                $('.companion-overlay.full-overlay').fadeOut();
                $('#' + mode + '-overlay.full-overlay').fadeIn();

                // Pause video if player is available
                if (video_view && (typeof(video_view.player) != 'undefined')) {
                    video_view.player.pause();
                }
            }, countdown);
        };

        var teardown_play_timer = function() {
            clearTimeout(sleep_timer);
            sleep_timer = null;
            $('.companion-overlay.full-overlay').fadeOut();
        };

        /**
         * Controller has desynced.
         * - Stop listening to PubSubJS messages.
         * - Stop play timer.
         */
        faye_client.on('unpaired', function() {
            teardown_play_timer();

            if (game_message_token) {
                Messages.unsubscribe(game_message_token);
            }

            if (video_message_token) {
                Messages.unsubscribe(video_message_token);
            }

            faye_client.refresh();
        });

        // TODO: Put this into Faye-Client
        // Google Analytic sync event
        if (window._gat && window._gat._getTracker) {
            var pageTracker = _gat._getTracker('UA-4005001-3');
            pageTracker._trackEvent('Parents Bar', 'Settings', 'PBS KIDS Super Vision - Code Returned');
        }

        var subscribe_messages = function(message, data) {
            if (!!data.type) {
                if (data.type.toLowerCase() == 'clip' || data.type.toLowerCase() == 'episode') {
                    current_video_title = data.title;
                    data._meta = { type: 'activity' };
                } else if (data.type.toLowerCase() == 'game') {
                    data._meta = { type: 'activity' };
                }
            }

            // attach default kid label
            data.kid_label_guid = supervisionClient.sync_state.default_kid_label;

            // attach timestamp
            data.timestamp = new Date().getTime();

            faye_client.send(data, false);
        };

        // This is the callback for when a code is retrieved and emitted by the faye client. This is declared here so
        // that the *same exact function* is passed as the listener every time, which allows the listener to be removed
        // properly as well. This fixes Pivotal #106117524
        var onInit = function(data) {
        };

        // This is the callback for when a consumer requests a configuration change, which also forces a sync code
        // refresh. However, in certain cases, this listener can be accidentally be wired up twice. By pulling to here,
        // we guarantee that it's removed before being added twice
        var onConfigure = function(new_configuration) {
          if(!faye_client.config) {
            return;
          }

          // merge the new configuration over the previous
          _.merge(faye_client.config, new_configuration.data);
          
          // TODO: Figure out a better place for this to live
          var defaultText = 'Type this connect code into the Super Vision mobile app to get progress reports for Skill Pack';
          document.getElementsByClassName('instructions')[0].innerText = faye_client.config.instructions || defaultText;
          
          // regenerate a new key if the origin changed, and we're not already connected
          if(!!new_configuration.data.origin && !faye_client.isPaired) {
            faye_client.refresh();
          }
        };

        var config = function(options) {
            if (typeof(options) == 'undefined') {
                return;
            }

            if (typeof(options.video_view) != 'undefined') {
               video_view = options.video_view;
            }
        };

        /**
         * Controller synced.
         * - Subscribe to PubSubJS messages (idempotent).
         * - Watch for controller play timer commands.
         */
        faye_client.ready(function(sync_state) {
            if( Messages ) {
                if (game_message_token) Messages.unsubscribe(game_message_token);
                game_message_token = Messages.subscribe('pbskids.messages.games', subscribe_messages, false);

                if (game_event_message_token) Messages.unsubscribe(game_event_message_token);
                game_event_message_token = Messages.subscribe('pbskids.messages.games.events', subscribe_messages, false);

                if (video_event_message_token) Messages.unsubscribe(video_event_message_token);
                video_event_message_token = Messages.subscribe('pbskids.messages.video.events', subscribe_messages, false);

                if( window.location.href.match( /pbskids.org\/video\/(index.php)?$/ ) ){
                    if (video_message_token) Messages.unsubscribe(video_message_token);
                    video_message_token = Messages.subscribe('pbskids.messages.video', subscribe_messages, false);
                }

                Messages.init();
            }

            faye_client.recieve('play_timer', function(data) {
                switch(data.name) {
                    case 'sleep':
                        deploy_play_timer(data.mode, data.value);
                        break;
                    case 'cancel_sleep':
                        teardown_play_timer();
                        break;
                }
            });

            faye_client.recieve('update_kid_label', function(data) {
              supervisionClient.sync_state = supervisionClient.sync_state || {};
              supervisionClient.sync_state.default_kid_label = data.kid_label_guid;
            });
        });

        /**
         * Channel subscribed.
         * - Resume/tear down existing play timer countdown.
         */
        faye_client.subscribed(function(sync_state) {
            supervisionClient.sync_state = sync_state;
            // Play timer SST from the server
            if (typeof(sync_state) !== 'undefined') {
                if (sync_state.timer == null) {
                    teardown_play_timer();
                } else {
                    deploy_play_timer(sync_state.timer.mode, sync_state.timer.value);
                }
            }
        });

        $(document).ready(function() {
            // Video event bootstrapping
            var lazy_video_progress = window._.debounce(function(event) {
                var data = {
                    current_video_title: current_video_title,
                    time: event.time,
                    percent: event.percent
                };

                data._meta = {
                  type: 'video_progress'
                };

                // Don't send a progress event to super vision if there's no channel
                if(supervisionClient.sync_state == null) {
                  return;
                }
            
                // attach default kid label
                data.kid_label_guid = supervisionClient.sync_state.default_kid_label;

                faye_client.send(data, false);
            }, 1000, {leading: true, maxWait: 25});

            $(document).on('org_pbskids_video_VideoEvent_CurrentTimeChange', function(event) {
                lazy_video_progress(event);
            });

            $(document).on('org_pbskids_video_VideoEvent_VideoViewed', function(event) {
                var duration = Math.floor((event.percentViewed / 100) * event.release.duration);
                var data = {
                    title: event.release.title,
                    property: event.release.series_title,
                    image: event.release.images.littlevideothumbnail.url,
                    duration: duration
                };

                data._meta = {
                  type: 'video_view'
                };
                
                // Don't send a progress event to super vision if there's no channel
                if(supervisionClient.sync_state == null) {
                  return;
                }

                // attach default kid label
                data.kid_label_guid = supervisionClient.sync_state.default_kid_label;

                faye_client.send(data, false);
            });

            // Remove timer overlay on browser reload
            faye_client.send({
                _meta: {
                    type: 'play_timer'
                },
                status: 'site_refresh'
            }, false);
        });

        this.config = config;
        this.subscribe_messages = subscribe_messages;
    };

    return new SupervisionClient($, faye_client, _, Messages, SimpleStorage, UUID);
}));
