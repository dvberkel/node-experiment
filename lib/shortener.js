var words = require('./words');
var redis = require('redis');

var generator = words.over(["a", "b", "c"]);
var client = redis.createClient();

var maxOf = function(a_word, other_word){
    var a_length = a_word.length;
    var other_length = other_word.length;
    if (a_length < other_length || (a_length === other_length && a_word < other_word)) {
	return other_word;
    }
    return a_word;
};

client.on("ready", function(){
    client.keys("*", function(error, keys){
	var start_word = "cc"
	for (var index = 0; index < keys.length; index++) {
	    start_word = maxOf(start_word, keys[index]);
	}
	generator.startingAt(start_word).next();
    });
});
client.on("error", function(error){
    console.log("Redis client: " + error);
});
var database = {};

exports = module.exports = {
    shorten : function(target) {
	var origin = generator.next();
	database[origin] = target;
	client.set(origin, target);
	return {
	    "target": target,
	    "origin": origin
	}
    },
    lookup : function(origin, callback) {
	client.exists(origin, function(error, present){
	    if (present) {
		client.get(origin, function(error, target){
		    callback.call(undefined, {
			"success" : true,
			"origin" : origin,
			"target" : target
		    });
		});
	    } else {
		callback.call(undefined, {
		    "success" : false,
		    "origin" : origin
		});
	    }
	});
    }
};
