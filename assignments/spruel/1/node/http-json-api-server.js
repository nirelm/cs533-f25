var http = require('http');
var url  = require('url');


var srv = http.createServer(function(req, res) {

    var urlPath = url.parse(req.url, true);
    
    var path = urlPath.pathname;
    var date = new Date(urlPath.query.iso);
    
    if (path == '/api/parsetime') {
        var data = { hour : date.getHours(), 
            minute : date.getMinutes(), 
            second : date.getSeconds()};
    } else if(path == '/api/unixtime') {
        var data = {unixtime: date.getTime()};
    }
    res.end(JSON.stringify(data));
});

srv.listen(process.argv[2]);