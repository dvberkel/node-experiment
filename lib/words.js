exports.over = function(alphabet){
    var current_word = "";
    var next_word = function(a_word){
	var result;
	if (a_word === "") {
	    result = "a";
	} else {
	    result = "b";
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
