exports.repeat = function(n){
    return {
	times : function(operator) {
	    for (var index = 0; index < n; index++) {
		operator.call();
	    }
	}
    };
};
