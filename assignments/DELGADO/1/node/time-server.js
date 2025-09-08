let net = require('net');
let port = process.argv[2];

function runServer() {
    let server = net.createServer(function (socket) {
    let date = new Date();
    
    let year = date.getFullYear();
    let month = formatTime((date.getMonth()+1).toString());
    let day = formatTime(date.getDate().toString());
    let hour = formatTime(date.getHours().toString());
    let min = formatTime(date.getMinutes().toString());
    
    let output = `${year}-${month}-${day} ${hour}:${min}`;
    socket.end(output + '\n');
    });

    server.listen(port)
}

function formatTime(dateVal) {
    return ('0' + dateVal).slice(-2);
}

runServer();