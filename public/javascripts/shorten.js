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
	    $.ajax("", {
		type: "POST",
		async: true,
		data: {
		    target: url
		},
		success: function(){
		    console.log("success");
		},
		error: function(){
		    console.log("error")
		}
		
	    });
	});
    };
    
    $(function(){
	$("#shorten-button").shorten({
	    "target": $("#target")
	});
    });
})(jQuery)