var words = require('./words');
var redis = require('redis');

var generator = words.over(["a", "b", "c"]).startingAt("aaa");
var client = redis.createClient();

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