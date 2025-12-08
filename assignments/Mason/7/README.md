# Assignment 7 – Phishing Lab (Web Security)

This project demonstrates a simple phishing-style login page created for educational purposes only as part of a web security course. The site runs locally using Node.js and Express and logs submitted dummy credentials to a local file.

---

## Code

- server.js – Express server that handles form submissions and logs credentials.
- public/index.html – Fake login page.
- public/thanks.html – Page displayed after login.
- log.txt – File that stores submitted dummy credentials.
  
---

## Issues Encountered

- Initially, the server would not start due to HTML code accidentally being placed inside server.js.
- I also encountered an error accessing incorrect routes such as `/fingerprints` instead of the correct root path.
- Once the file structure and routes were corrected, the site ran successfully.

---

## Screenshots & Log File

Screenshots showing:
- The fake login page
- The submission confirmation page
- The log file with captured dummy credentials  
are located in the `/screenshots` directory.

---

## Demo Video

https://youtu.be/zuDenSCeCKk


