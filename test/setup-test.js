var vows = require('vows');
var assert = require('assert');

vows.describe('Test Setup').addBatch({
    'when configured correctly': {
	topic: function(){ return true; },
	
	'should correctly run tests': function(topic){
	    assert.equal (topic, true);
	}
    }
}).run();