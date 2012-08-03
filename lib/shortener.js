var words = require('./words');

var generator = words.over(["a", "b", "c"]).startingAt("aaa");
var database = {};

exports = module.exports = {
    shorten : function(target) {
	var origin = generator.next();
	database[origin] = target;
	return {
	    "target": target,
	    "origin": origin
	}
    },
    lookup : function(origin) {
	if (database.hasOwnProperty(origin)) {
	    return {
		"success" : true,
		"origin" : origin,
		"target" : database[origin]
	    };
	} else {
	    return {
		"success" : false,
		"origin" : origin
	    };
	}
    }
};