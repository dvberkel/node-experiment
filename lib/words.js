var util = require('./util')

exports.over = function(alphabet){
    var current_word = "";
    var first_letter = alphabet[0];
    var last_letter = alphabet[alphabet.length - 1];
    var next_letter = function(a_letter) {
	var index = alphabet.indexOf(a_letter);
	return alphabet[index + 1];
    };
    var next_word = function(a_word) {
	var result;
	var index = a_word.length - 1;
	while (index >= 0 && a_word.substr(index, 1) === last_letter) {
	    index--;
	}
	if (index >= 0) {
	    result = a_word.substring(0, index) + next_letter(a_word.substr(index, 1));
	    util.repeat(a_word.substring(index + 1).length).times(function(){ result += first_letter; });
	} else {
	    result = first_letter;
	    util.repeat(a_word.length).times(function(){ result += first_letter; });
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
