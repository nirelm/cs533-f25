const fs = require('fs');

// console.log(`Location: ${process.argv[2]} | Extension: ${process.argv[3]}`);
let location = process.argv[2];
let extension = `.${process.argv[3]}`;
fs.readdir(location, 'utf8', function(err, files) {

    if(err) {
        console.log(err);
        return;
    }
    files.forEach((fileName) => {
        if(fileName.endsWith(extension)) {
            console.log(fileName);
        }
    });
});