// time-server.js
const net = require('net');

function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

const server = net.createServer((socket) => {
  const d = new Date();
  const line =
    d.getFullYear() +
    '-' + pad(d.getMonth() + 1) +      // month is 0-based
    '-' + pad(d.getDate()) +
    ' ' + pad(d.getHours()) +
    ':' + pad(d.getMinutes());

  socket.end(line + '\n');             // write and close
});

server.listen(Number(process.argv[2]));
