var vows = require('vows');
var words = require('../lib/words');
var util = require('../lib/util');

vows.describe('Words').addBatch({
    'when \'#over\' is called with the alphabet \'["a", "b"]\'' : {
	topic: function(){ return ['a', 'b']; },
	
	'\'#next\' should return the empty word' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    var result;
	    util.repeat(1).times(function(){ result = generator.next(); });
	    
	    result.should.equal('');
	},

	'\'#next\' called a second time should return \'a\'' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    var result;
	    util.repeat(2).times(function(){ result = generator.next(); });
	    
	    result.should.equal('a');
	},

	'\'#next\' called thrice should return \'b\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(3).times(function(){ result = generator.next(); });
	    
	    result.should.equal('b');
	},

	'\'#next\' called four times should return \'aa\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(4).times(function(){ result = generator.next(); });
	    
	    result.should.equal('aa');
	},

	'\'#next\' called five times should return \'ab\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(5).times(function(){ result = generator.next(); });
	    
	    result.should.equal('ab');
	},

	'\'#next\' called six times should return \'ba\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(6).times(function(){ result = generator.next(); });
	    
	    result.should.equal('ba');
	},

	'\'#next\' called seven times should return \'bb\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(7).times(function(){ result = generator.next(); });
	    
	    result.should.equal('bb');
	},

	'\'#next\' called eight times should return \'aaa\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(8).times(function(){ result = generator.next(); });
	    
	    result.should.equal('aaa');
	}
    },
    'when \'#over\' is called with the alphabet \'["a", "b", "c"]\'' : {
	topic: function(){ return ['a', 'b', 'c']; },
	
	'\'#next\' should return the empty word' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    var result;
	    util.repeat(1).times(function(){ result = generator.next(); });
	    
	    result.should.equal('');
	},

	'\'#next\' called a second time should return \'a\'' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    var result;
	    util.repeat(2).times(function(){ result = generator.next(); });
	    
	    result.should.equal('a');
	},

	'\'#next\' called thrice should return \'b\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(3).times(function(){ result = generator.next(); });
	    
	    result.should.equal('b');
	},

	'\'#next\' called four times should return \'c\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(4).times(function(){ result = generator.next(); });
	    
	    result.should.equal('c');
	},

	'\'#next\' called five times should return \'aa\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(5).times(function(){ result = generator.next(); });
	    
	    result.should.equal('aa');
	},

	'\'#next\' called six times should return \'ab\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(6).times(function(){ result = generator.next(); });
	    
	    result.should.equal('ab');
	},

	'\'#next\' called seven times should return \'ac\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(7).times(function(){ result = generator.next(); });
	    
	    result.should.equal('ac');
	},

	'\'#next\' called eight times should return \'ba\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    var result;
	    util.repeat(8).times(function(){ result = generator.next(); });
	    
	    result.should.equal('ba');
	}
    },
    'when \'#over\' is called with alphabet is [\'a\', \'b\']' : {
	topic : function(){ return words.over(["a", "b"])},

	'\'#startingAt\'should reset the generator' : function(generator){
	    generator.startingAt('aaaa');
	    
	    var result = generator.next();

	    result.should.equal('aaaa')
	}
    }
}).export(module);
