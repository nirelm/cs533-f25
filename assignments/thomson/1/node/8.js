const http = require('http');
const urls = process.argv.slice(2);
const r = [];
let count = 0;

function printr() {
  for (let i = 0; i < urls.length; i++) {
    console.log(r[i]);
  }
}

function fetchData(index) {
  http.get(urls[index], response => {
    let data = '';
    response.setEncoding('utf8');

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      r[index] = data;
      count++;

      if (count === urls.length) {
        printr();
      }
    });

    response.on('error', err => {
      console.error('Error:', err.message);
    });
  });
}

// Start requests for all URLs
for (let i = 0; i < urls.length; i++) {
  fetchData(i);
}