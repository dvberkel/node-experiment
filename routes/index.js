
/*
 * GET home page.
 */

var words = require('../lib/words');
var generator = words.over(["a", "b", "c"]).startingAt("aaa");

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.shorten = function(req, res){
    var target = req.param('target');
    var origin = generator.next();
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.write(JSON.stringify({
	"target": target,
	"origin": origin
    }));
    res.end();
};
