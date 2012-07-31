exports.over = function(alphabet){
    var current_word = "";
    return {
	next : function(){
	    var result = current_word;
	    if (result === "") {
		current_word = "a";
	    } else {
		current_word = "b";
	    }
	    return result;
	}
    };
};
