// http-collect.js

const http = require('http');

const url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');

  let fullResponse = '';

  response.on('data', chunk => {
    fullResponse += chunk;
  });

  response.on('end', () => {
    console.log(fullResponse.length);
    console.log(fullResponse);
  });

  response.on('error', err => {
    console.error('Error:', err.message);
  });
});