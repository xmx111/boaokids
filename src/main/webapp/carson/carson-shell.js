(function( window, factory ){
  if( typeof PBS !== 'undefined' && typeof PBS.KIDS !== 'undefined' && typeof PBS.KIDS.define === "function" && PBS.KIDS.define.amd ){
  //PBS AMD support for PBS.KIDS.requireJS
    PBS.KIDS.define( ['jquery'], factory );
  }
  else if( typeof define === "function" && define.amd ){
    // Global AMD for requireJS
    define( ['jquery'], factory );
  } 
  else {
    factory( window.jQuery );
  }

}(this, function( $ ) {
    var Carson = function() {
        //var protocol = window.location.href.split( '/' )[0];
        //var host = window.location.href.split( '/' )[2];

        /*switch (host) {
            case 'pbskids.org':
                host = 'www-tc.pbskids.org';
                break;
            case 'ernie.pbskids.org':
                host = 'ernie-tc.pbskids.org';
                break;
            case 'soup.pbskids.org':
                host = 'soup-tc.pbskids.org';
                break;
            case 'dev.pbskids.org':
                host = 'dev.pbskids.org';
                break;
            case 'qa.pbskids.org':
                host = 'qa.pbskids.org';
                break;
            case 'demo.pbskids.org':
                host = 'demo.pbskids.org';
                break;
            default:
                host = 'stage.pbskids.org';
                break;
        }*/
        
        //host = 'www-tc.pbskids.org'
        

        this.img_service_url = 'http://cms-tc.pbskids.org/global';
        this.images = [];
        this.onload = null;
        this.loaded_image_count = 0;
        this.rules = null;

        $('document').ready(function() {
            $('body').trigger('carson.load');
        });
    };


    
    /**
     * Triggers 'carson.done' event on body element when all Carson images are loaded.
     */
    Carson.prototype.check_carson_done = function() {
        this.loaded_image_count++;

        if (this.loaded_image_count == this.images.length) {
            $('body').trigger('carson.done');
        }
    };


    /**
     * Detect environment viewport.
     * Modulate 'data-carson-src' based on 'data-carson-rule'.
     */
    Carson.prototype.apply_rules = function() {
        if (this.rules == null) {
            return;
        }

        for (var i=0; i<this.images.length; i++) {
            var image = $(this.images[i]);
            var image_src = image.data('carson-src');
            var image_rule = image.data('carson-rule');

            if (!image_rule) {
                continue;
            }

            if (typeof(this.rules[image_rule]) != 'function') {
                continue;
            }

            var image_size = this.rules[image_rule]();

            switch (image_size) {
                case 'mezzanine':
                    break;
                case 'none':
                    image.data('carson-src', '');
                    break;
                default:
                    image_src = image_src + '?size=' + image_size;
                    image.data('carson-src', image_src);
            }
        }
    };

    /**
     * Modulate 'data-carson-src' based on 'data-carson-size'.
     */
    Carson.prototype.resize_images = function() {
        for (var i=0; i<this.images.length; i++) {
            var image = $(this.images[i]);
            var image_src = image.data('carson-src');
            var image_size = image.data('carson-size');
            var graphics_directory;

            if (typeof(image_size) == 'undefined') {
                continue;
            }
            
            switch (image_size) {
                case 'medium':
					image_size = '_shellMedium/';
					break;
                case 'topic-block':
                    image_size = '_shellTopicBlock/';
                    break;
                case 'topics-feature':
                		image_size = '_shellTopicsFeature/';
                    break;
                case 'small-bubbles': 
                		image_size = '';
                    break;
                default:
                		image_size = '';		
            }
            
            if (image_src.match(/games/gi)) {
            	graphics_directory = 'mezzanines/games';
            } else if (image_src.match(/shows/gi)) {
	            graphics_directory = 'mezzanines/shows';
            } else if (image_src.match(/show-bubbles/gi)) {
	            graphics_directory = 'show-icons/square';
            }
            
            
            var just_the_image = image_src.match(/[a-zA-Z0-9\-_]*\.(png|jpg)/gi);

            built_image_src = graphics_directory + '/' + image_size + just_the_image ;
            image.data('carson-src', built_image_src);
        }
    };


    /**
     * Attach 'onload' callback to onload event of Carson images.
     * Attach 'check_carson_done' callback to onload event of Carson images.
     */
    Carson.prototype.bind_callbacks = function() {
        var self = this;

        for (var i=0; i<this.images.length; i++) {
            $(this.images[i]).load(function() {
                if (self.onload != null) {
                    self.onload();
                }

                self.check_carson_done();
            }).error(function() {
                self.check_carson_done();
            });
        }
    };


    /**
     * Set image 'src' attributes to initiate network requests.
     */
    Carson.prototype.fetch = function() {
        for (var i=0; i<this.images.length; i++) {
            var image = $(this.images[i]);
            var namespaced_path = image.data('carson-src');

            if (namespaced_path == '') {
                continue;
            }

            if (namespaced_path[0] != '/') {
                namespaced_path = '/' + namespaced_path;
            }

            var image_src = this.img_service_url + namespaced_path;
            image.attr('src', image_src);
        }
    };


    /**
     * Parse custom options.
     * Make an array of images Carson has to handle.
     * Handle said images.
     */
    Carson.prototype.init = function(options) {
        if ((typeof(options) != 'undefined') && (typeof(options.onload) == 'function')) {
            this.onload = options.onload;
        }

        if ((typeof(options) != 'undefined') && (typeof(options.rules) == 'object')) {
            this.rules = options.rules;
        }

        this.images = $('img[data-carson-src]').not('img[src]');

        this.apply_rules();
        this.resize_images();
        this.bind_callbacks();
        this.fetch();
    };


    if (typeof(window.PBS) == 'undefined') {
        window.PBS = {};
    }

    if (typeof(window.PBS.KIDS) == 'undefined') {
        window.PBS.KIDS = {};
    }

    window.PBS.KIDS.carson = new Carson();

    $('document').ready(function() {
        $('body').trigger('carson.ready');
    });
}));
