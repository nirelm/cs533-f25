const http = require('http') 
const fs = require('fs')

const srv = http.createServer(function (req, res) {
        let data = fs.createReadStream(process.argv[3])
        data.pipe(res)
    });
  srv.listen(process.argv[2]) 
  