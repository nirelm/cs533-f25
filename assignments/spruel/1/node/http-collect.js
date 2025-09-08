const bl = require('bl') 
const http = require('http') 

function callback (response) {
     response.pipe(bl( function (err,data) { 
        console.log(data.length)
        console.log(data.toString()
    ) }))
}

http.get(process.argv[2],callback)
