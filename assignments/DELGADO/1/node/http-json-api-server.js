const http = require('http');
const url  = require('url');
const port = process.argv[2];

function formatDate(date) {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
}

function formatUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

function submitResponse(res, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}

let server = http.createServer(function(req, res) {
    let urlData = url.parse(req.url, true);
    let route = urlData.pathname;
    let date = new Date(urlData.query.iso);

    if(route == '/api/parsetime') {
        let data = formatDate(date);
        submitResponse(res, data);
    } else if(route == '/api/unixtime') {
        let data = formatUnix(date);
        submitResponse(res, data);
    } else {
        res.writeHead(404);
        res.end();
    }    
});

server.listen(port);