
/*
 * GET home page.
 */

var words = require('../lib/words');
var generator = words.over(["a", "b", "c"]).startingAt("aaa");
var database = {};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.shorten = function(req, res){
    var target = req.param('target');
    var origin = generator.next();
    database[origin] = target;
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.write(JSON.stringify({
	"target": target,
	"origin": origin
    }));
    res.end();
};

exports.lookup = function(req, res){
    var origin = req.param('origin');
    var target = database[origin]; 
    res.redirect(target);
};
