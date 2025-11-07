// server.js (fixed)
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => { console.log(`${new Date().toISOString()} ${req.method} ${req.url}`); next(); });
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));
app.use('/frame-path-attack', express.static(path.join(__dirname, 'frame-path-attack')));

app.get('/set-cookie', (req, res) => {
  // fixed: cookie restricted by path and httpOnly so JS cannot read it
  res.cookie('sessionID', 'SAFE-11111', { path: '/victim-only', httpOnly: true, sameSite: 'Strict' });
  res.cookie('secret_token', 'abc123', { path: '/' }); // optional non-sensitive cookie
  return res.sendFile(path.join(__dirname, 'frame-path-attack', 'child.html'));
});

app.get('/parent.html', (req, res) => {
  return res.sendFile(path.join(__dirname, 'frame-path-attack', 'parent.html'));
});

app.listen(port, () => console.log(`Frame Path attack server running on http://localhost:${port}`));


