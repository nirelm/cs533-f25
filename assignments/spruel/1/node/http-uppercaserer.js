const http = require('http') 
const map = require('through2-map')

const srv = http.createServer(function (req, res) {
    const map = require('through2-map')  
    if (req.method === 'POST')
    {
        req.pipe(map(function (data) {
            return data.toString().toUpperCase();
        })).pipe(res);
    }
})

srv.listen(process.argv[2]) 