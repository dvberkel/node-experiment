var util = require('./util')

exports.over = function(alphabet){
    var current_word = "";
    var next_word = function(a_word) {
	var result;
	var index = a_word.length - 1;
	while (index >= 0 && a_word.substr(index, 1) === "b") {
	    index--;
	}
	if (index >= 0) {
	    result = a_word.substring(0, index) + "b";
	} else {
	    result = "a";
	    util.repeat(a_word.length).times(function(){ result += "a"; });
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
