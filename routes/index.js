
/*
 * GET home page.
 */

var shortener = require('../lib/shortener');
var words = require('../lib/words');
var generator = words.over(["a", "b", "c"]).startingAt("aaa");
var database = {};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.shorten = function(req, res){
    var result = shortener.shorten(req.param('target'));
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.write(JSON.stringify(result));
    res.end();
};

exports.lookup = function(req, res){
    var result = shortener.lookup(req.param('origin'));
    if (result.success) {
	res.redirect(result.target);
    } else {
	result.title = "oops";
	res.render('no-look-up', result);
    }
};
