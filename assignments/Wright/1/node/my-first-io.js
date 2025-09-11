const fs = require('fs');

// Read file synchronously. process.argv[2] gives the file path argument.
const contents = fs.readFileSync(process.argv[2]);

// Convert buffer to string, then split on newlines.
const lines = contents.toString().split('\n').length - 1;

console.log(lines);
