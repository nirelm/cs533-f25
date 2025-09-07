const http = require('http');
const bl = require('bl');
const urls = [process.argv[2], process.argv[3], process.argv[4]]

const output = new Map();
 
function printData(output) {
    urls.forEach(url => {
        console.log(output.get(url));
    });
}
 
function makeRequest(url) {
    http.get(url, function (response) {  
        response.pipe(bl(function (err, data) {  
            if (err) {
                return console.error(err)
            }
            
            output.set(url, data.toString());

            if (output.size == urls.length) {
                printData(output);
            }
            
        }));
    });
}

urls.forEach(url => {
    makeRequest(url);
});