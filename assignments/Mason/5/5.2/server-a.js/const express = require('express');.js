const express = require('express');
const path = require('path');

const app = express();
const port = 8090;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`5.2 Server A running at http://localhost:${port}`);
});
