const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];
// const path = '/home/labraderp/Documents/test.txt'

const server = http.createServer(function(req, res) {
    let stream = fs.createReadStream(path, 'utf-8');
    stream.pipe(res);
});

server.listen(port);