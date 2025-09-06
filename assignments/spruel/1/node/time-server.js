const net = require('net')


 const server = net.createServer(function (socket) {  
       let data =''
       let date = new Date()
       data += date.getFullYear().toString() + '-'
       data += String(date.getMonth() + 1).padStart(2,0)   + '-'
       data += date.getDate().toString().padStart(2,0)     + ' '
       data += date.getHours().toString().padStart(2,0)    + ':'  
       data += date.getMinutes().toString().padStart(2,0)   
       data += '\n'
       socket.write(data)
       socket.end()
     })  
     server.listen(process.argv[2])  