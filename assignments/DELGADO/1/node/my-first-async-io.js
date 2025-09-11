const fs = require('fs');

function countLinesInFile(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            return;
        }

        const lineCount = data.split('\n').length - 1;
        console.log(lineCount);
    });
}

countLinesInFile(process.argv[2]);