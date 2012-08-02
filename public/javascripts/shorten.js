(function($, undefined){
    var default_target = {
	val : function(){
	    console.log("Using default target");
	    return undefined;
	}
    };

    $.fn.shorten = function(options){
	var settings = $.extend({
	    "target" : default_target
	}, options);
	this.click(function(){
	    var url = settings.target.val();
	    console.log(url);
	});
    };
    
    $(function(){
	$("#shorten-button").shorten({
	    "target": $("#target")
	});
    });
})(jQuery)