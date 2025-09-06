  const fs = require('fs')  
  module.exports = function (path, ext, callback) { 
   
        let fb =  fs.readdir (path,function (err, data) {
        if (err) 
        {
            callback(err,[])
            return
        }
        let answer = [] 
            data.forEach((x) => {

            if(x.split('.')[1] === ext)
            {
                answer.push(x)
            }
        })
        callback(undefined, answer)
    } )
    
    
  } 