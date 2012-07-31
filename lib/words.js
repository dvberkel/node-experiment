exports.over = function(alphabet){
    var current_word = "";
    var next_word = function(a_word) {
	var result;
	var index = a_word.length - 1;
	if (index >= 0) {
	    result = "b";
	} else {
	    result = "a";
	}
	return result;
    };
    return {
	next : function(){
	    var result = current_word;
	    current_word = next_word(result);
	    return result;
	}
    };
};
