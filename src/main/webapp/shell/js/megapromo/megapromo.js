(function(factory){

    var deps = ['jquery'];

    if( typeof PBS !== 'undefined' && typeof PBS.KIDS !== 'undefined' && typeof PBS.KIDS.define === "function" && PBS.KIDS.define.amd ){
	// PBS.KIDS AMD. Register as an anonymous module.
	PBS.KIDS.define(deps, factory );
    }
    else if ( typeof define === "function" && define.amd ) {
	// AMD. Register as an anonymous module.
	define(deps, factory );
    } else {
	// Browser globals
	factory( PBS.KIDS.jQuery );
    }
    
}( function( $ ){

    function randomInt(upperlimit, lowerlimit){
	var u = !isNaN(upperlimit) ? upperlimit : 1; //doing it this way to allow passing 0 as an upperlimit
    	var l = ( lowerlimit || 0);
    	return Math.min(u, Math.floor(l + Math.random() * (u - l +1)));
    }//randomInt()

    var megapromo_container = $('#mega-promo .standard-version');
    var no_flash_megapromo_container = $('#mega-promo .no-flash-version');

    $.getJSON("/shell/js/megapromo/megapromos.json", function(megapromos){

	var sample = new Array();
	for (var i=0; i < megapromos.length; i++){
	    sample = sample.concat(Array.apply(null, new Array(parseInt(megapromos[i].frequency))).map(function(){return megapromos[i]}));
	}
	var index = randomInt(sample.length-1, 0);
	var megapromo = sample[index];

	if (megapromo.type == 'static'){
	    megapromo_container.attr('href', megapromo.link)
	    megapromo_container.find('.feature-poster').attr('src', megapromo.resource)
	    no_flash_megapromo_container.attr('href', megapromo.link)
	    no_flash_megapromo_container.find('.feature-poster').attr('src', megapromo.resource)
	}

    })
    
})
);