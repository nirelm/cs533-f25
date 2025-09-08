// http-json-api-server.js
const http = require('http');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405);
    return res.end();
  }

  const url = new URL(req.url, 'http://localhost'); // base required to parse
  const iso = url.searchParams.get('iso');

  if (!iso) {
    res.writeHead(400);
    return res.end(); // missing ?iso=...
  }

  const d = new Date(iso);
  let payload;

  if (url.pathname === '/api/parsetime') {
    payload = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
    };
  } else if (url.pathname === '/api/unixtime') {
    payload = { unixtime: d.getTime() };
  } else {
    res.writeHead(404);
    return res.end();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
});

server.listen(port);
