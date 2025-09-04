// http-uppercaserer.js
const http = require('http');

const port = Number(process.argv[2]);

http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('Send me a POST\n');

  req.setEncoding('utf8');
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => res.end(body.toUpperCase()));
}).listen(port);
