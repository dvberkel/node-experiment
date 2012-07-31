var vows = require('vows');
var words = require('../lib/words');

vows.describe('Words').addBatch({
    'when \'#over\' is called with the alphabet \'["a", "b"]\'' : {
	topic: function(){ retun ['a', 'b']; },
	
	'\'#next\' should return the empty word' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    var result = generator.next();
	    
	    result.should.equal('');
	},

	'\'#next\' called a second time should return \'a\'' : function(alphabet){
	    var generator = words.over(alphabet);
	    
	    generator.next();
	    var result = generator.next();
	    
	    result.should.equal('a');
	},

	'\'#next\' called thrice should return \'b\'' : function(alphabet){
	    var generator = words.over(alphabet);

	    generator.next();
	    generator.next();
	    var result = generator.next();
	    
	    result.should.equal('b');
	}
    }
}).export(module);
