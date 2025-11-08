const express = require('express');
const app = express();
const port = 8091;

// BLOCKED VERSION: we send headers, but browser can't read them yet
app.get('/info', (req, res) => {
  res.setHeader('X-CS533f25-1', 'pizza');
  res.setHeader('X-CS533f25-2', 'coding');
  res.setHeader('X-CS533f25-3', 'travel');
  res.setHeader('X-CS533f25-4', 'music');
  res.json({ message: 'custom headers sent (but not readable yet)' });
});

app.listen(port, () => {
  console.log(`5.2 Server B running at http://localhost:${port}`);
});
