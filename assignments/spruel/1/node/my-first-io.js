
const fs = require('fs')  
let fb =  fs.readFile (process.argv[2],function callback (err, data) { 
    let str = data.toString()
    let count = str.split('\n').length -1
    console.log(count)
}  )
