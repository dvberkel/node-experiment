var util = require('./util')

var take = function(word){
    return {
	repeated : function(n){
	    var result = "";
	    for (var index = 0; index < n; index++) {
		result += word;
	    }
	    return {
		times : function(){
		    return result;
		}
	    }
	},
	until : function(index){
	    return word.substring(0, index);
	}
    };
};

var letter = function(n) {
    return {
	of : function(a_string) {
	    return a_string.substr(n,1);
	}
    }
};

var generator_for = function(alphabet){
    var first_letter = alphabet[0];
    var last_letter = alphabet[alphabet.length - 1];
    var next_letter = function(a_letter) {
	var index = alphabet.indexOf(a_letter);
	return alphabet[index + 1];
    };
    return function(a_word) {
	var result;
	var index = a_word.length - 1;
	while (index >= 0 && letter(index).of(a_word) === last_letter) {
	    index--;
	}
	if (index >= 0) {
	    result = take(a_word).until(index) + next_letter(letter(index).of(a_word)) + take(first_letter).repeated(a_word.substring(index + 1).length).times();
	} else {
	    result = take(first_letter).repeated(a_word.length + 1).times();
	}
	return result;
    };
};

exports.over = function(alphabet){
    var next_word = generator_for(alphabet);
    var current_word = "";
    return {
	next : function(){
	    var result = current_word;
	    current_word = next_word(result);
	    return result;
	},
	startingAt : function(a_word){
	    current_word = a_word;
	    return this;
	}
    };
};
