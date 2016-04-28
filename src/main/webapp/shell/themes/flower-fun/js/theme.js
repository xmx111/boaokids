var SUB_RIGHT = Math.PI;
var SUB_LEFT = 0;

var host = window.location.href.split('/')[2];

//if (host.match(/pbskids\.org$/))
if (true)
{              
    (function( factory )
    {
        if( typeof PBS !== 'undefined' && typeof PBS.KIDS !== 'undefined' && typeof PBS.KIDS.define === "function" && PBS.KIDS.define.amd )
        {
            //PBS AMD support for PBS.KIDS.requireJS
            PBS.KIDS.define(["jquery"], factory );
        }
        else
        {

            factory( jQuery );
        }
    }(function( $ )
    {

        var isIE = document.all && document.addEventListener; // detect IE 9-10
        
        if (Modernizr.canvas == true && !isIE && $('html').hasClass('no-issilky'))
        {
            $(document).on('themestage.ready', function (e) {       
            
            $(".theme-mini-static").remove();
                
            var app = new App($);
            
            window.onresize = function(event) 
            {
                app.resize();
            };
          });
        }
        else
        {
            renderStatic($);
        }  
    }));
}
else
{
  // this is here for local dev outside orange-peanut, e.g. Goodboy
    $(document).ready(function()
    {       
        if (Modernizr.canvas == true && $('html').hasClass('no-issilky'))        
        {
            $(document).on('themestage.ready', function (e) {   
                var app = new App($);
    
                window.onresize = function(event) 
                {
                    app.resize();
                };
            });
        }
        else
        {
            renderStatic(false);
        }
    });
}

function renderStatic(jqe)
{
    var jq = false;

    if(typeof(jqe) != "boolean" && jqe !== false) 
    {
        console.log('hmm');
        jq = jqe;
    }
    else
    {
        jq = jQuery;
    }

    var configPath = '';

    var qs = window.location.search || '';  

    if (jq && jq('html').hasClass('no-flash')) 
    {
        configPath = 'theme-mobile-config.json' + qs
    }
    else 
    {
        configPath = 'theme-config.json' + qs;
    }

    var images = [];
    var characters = [];
    var linkers = [];

    // Fallback version
    jq("#flower-fun-stage").remove();

    jq.getJSON(configPath, function(data)
    {
        config = data;        
        var i = 0;
        var host = window.location.href.split('/')[2];

        for (i=0; i < config.shows.length; i++) 
        {
            // Set to dev.pbskids.org until the CORS changes filter down to the www-tc CDN.
            //img.src = 'http://dev.pbskids.org' + config.shows[i].image;
            images.push({
                image : config.shows[i].image,
                href : config.shows[i].href
            });
        }

        images.sort(function() 
        { 
            return 0.5 - Math.random();
        });

        var i = 3;
        while(i--)
        {
            var character = jq('<div class="character"></div>').css(
            {
                background: "url(" + images[i].image + ") 50% 50% no-repeat",
                backgroundSize: '85%',
                left: (130 * i)
            });

            var linker = jq('<a class="character-linker"></a>')
                .css(
                {
                    left: (130 * i)
                })
                .attr('href', images[i].href);

            characters.push(character);
            linkers.push(linker)
        }

        var content = jq('<div class="static-surround"><div class="submarine"><div class="submarine-front"><div class="image-holder"></div><div class="submarine-front-inner"></div></div><div class="linkers"></div></div><div class="seaweed"></div></div>');

        var j = 3;
        while(j--)
        {
            content.find('.image-holder').append(characters[j]);

            content.find('.linkers').append(linkers[j]);   
        }
        
        content.prependTo("#theme-stage .theme-big-active"); 
    });
}