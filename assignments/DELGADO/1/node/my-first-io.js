const fs = require('fs');

// let buffer = fs.readFileSync('/home/labraderp/Documents/test');
let buffer = fs.readFileSync(process.argv[2]);
let val = buffer.toString().split('\n').length - 1;
// console.log(buffer.toString());
console.log(val);

// return val;