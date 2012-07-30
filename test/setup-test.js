var vows = require('vows');
var should = require('should');

vows.describe('Test Setup').addBatch({
    'when configured correctly': {
	topic: function(){ return true; },
	
	'should correctly run tests': function(topic){
	    should.equal (topic, true);
	}
    }
}).export(module);
