const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto')

const app = express();
const PORT = 3000;
// log file
const logFile = path.join(__dirname, 'fingerprints.log');

// Serve static HTML files
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Get fingerprint details
  const fingerprint = {
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    accept: req.headers['accept'],
    language: req.headers['accept-language'],
    encoding: req.headers['accept-encoding'],
    fingerprintHash: md5(req.headers['user-agent'] + req.ip)
  };

  // Log to file
  fs.appendFileSync(logFile, JSON.stringify(fingerprint) + '\n');

  console.log('Fingerprint:', fingerprint);

  res.sendFile(path.join(__dirname, 'public', 'default.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
