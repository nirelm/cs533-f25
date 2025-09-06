const fs = require('fs')  
let fb =  fs.readdir (process.argv[2],function callback (err, data) { 
    data.forEach((x,i) => {
 
        if(x.split('.')[1] === process.argv[3].toString())
        {
            console.log(x)
        }
    })
}  )
