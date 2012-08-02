(function($, undefined){
    var default_target = {
	val : function(){
	    console.log("Using default target");
	    return undefined;
	}
    };

    var default_result = {
	empty : function(){ return this; },
	html : function(){ 
	    console.log("Using default result");
	    return this;
	}
    }

    var default_template = function(data){
	var result = "";
	result += data.target;
	result += " is shortened to ";
	result += "<a href='" + data.origin + "'>" + data.origin + "</a>";
	return result;
    };
	

    $.fn.shorten = function(options){
	var settings = $.extend({
	    "target" : default_target,
	    "template" : default_template,
	    "result" : default_result
	}, options);
	this.click(function(){
	    var url = settings.target.val();
	    $.ajax("", {
		type: "POST",
		async: true,
		data: {
		    target: url
		},
		success: function(data){
		    settings.result.empty().html(settings.template(data));
		},
		error: function(){
		    console.log("error")
		}
		
	    });
	});
    };
    
    $(function(){
	$("#shorten-button").shorten({
	    "target": $("#target"),
	    "result": $("#result")
	});
    });
})(jQuery)
