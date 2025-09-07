const fs = require('fs');

// console.log(`Location: ${process.argv[2]} | Extension: ${process.argv[3]}`);
// let location = process.argv[2];
// let extension = `.${process.argv[3]}`;

module.exports = function filtered_function(location, extension, callback) {
    fs.readdir(location, 'utf8', function(err, files) {

    if(err) {
        return callback(err);
    }

    let fileArr = [];

    files.forEach((fileName) => {
        if(fileName.endsWith("." + extension)) {
            fileArr.push(fileName);
            console.log(fileName);
        }
    });

    return callback(null, fileArr);
});
}