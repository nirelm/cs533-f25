// server1.js
const express = require('express');

const app = express();
const port = 8080;

// serve the current folder (5.1)
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server 1 running at http://localhost:${port}`);
});

