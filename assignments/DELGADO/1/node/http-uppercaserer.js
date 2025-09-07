const http = require('http');
const fs = require('fs');
const map = require('through2-map');
const port = process.argv[2];

let server = http.createServer(function(req, res) {
    console.log(req.body);
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);