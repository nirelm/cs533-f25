// juggling-async.js
const http = require('http');

const urls = process.argv.slice(2);
const results = new Array(urls.length);
let completed = 0;

function fetchAt(index) {
  http.get(urls[index], (res) => {
    res.setEncoding('utf8');
    let data = '';

    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      results[index] = data;
      completed += 1;
      if (completed === urls.length) {
        results.forEach(r => console.log(r));
      }
    });
    res.on('error', console.error);
  }).on('error', console.error);
}

for (let i = 0; i < urls.length; i++) {
  fetchAt(i);
}
