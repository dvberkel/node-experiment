
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.shorten = function(req, res){
    console.log("shorten called");
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.write(JSON.stringify({
	"all": "ok"
    }));
    res.end();
};