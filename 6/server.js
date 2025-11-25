const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// in-memory store of fingerprints
const fingerprints = {};

// build a fingerprint from at least 4 headers
function makeFingerprint(req) {
  const pieces = [
    req.headers['user-agent'] || '',
    req.headers['accept-language'] || '',
    req.headers['accept-encoding'] || '',
    req.headers['dnt'] || '',
  ];
  const raw = pieces.join('|');
  return crypto.createHash('md5').update(raw).digest('hex');
}

// log to a file on server side
function logToFile(line) {
  const logLine = `${new Date().toISOString()} ${line}\n`;
  fs.appendFile(path.join(__dirname, 'fingerprints.log'), logLine, (err) => {
    if (err) console.error('Error writing log:', err);
  });
}

app.get('/', (req, res) => {
  const fp = makeFingerprint(req);
  const firstTime = !fingerprints[fp];

  if (firstTime) {
    fingerprints[fp] = { firstSeen: new Date(), count: 1, ua: req.headers['user-agent'] };
    logToFile(`NEW ${fp} ip=${req.ip} ua="${req.headers['user-agent']}"`);
  } else {
    fingerprints[fp].count += 1;
    fingerprints[fp].lastSeen = new Date();
    logToFile(`RETURNING ${fp} count=${fingerprints[fp].count}`);
  }

  res.send(`
    <html>
      <head><title>Browser Fingerprinting Demo</title></head>
      <body>
        <h1>Browser Fingerprinting Demo</h1>
        <p>Your fingerprint is: <code>${fp}</code></p>
        <p>Status: <strong>${firstTime ? 'First visit (NEW client)' : 'Welcome back (RETURNING client)'}</strong></p>
        <p>User-Agent: <code>${req.headers['user-agent']}</code></p>
      </body>
    </html>
  `);
});

// convenient route to see all fingerprints as JSON (good for screenshot)
app.get('/fingerprints', (req, res) => {
  res.json(fingerprints);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

