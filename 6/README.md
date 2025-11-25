# Assignment 6 — Browser Fingerprinting  
CS 433/533 Web Security – Fall 2025  
Name: Nirel Mason

---

## 🧠 Fingerprinting Overview

My Express server collects FOUR different HTTP request headers to create a browser fingerprint:

- `User-Agent`
- `Accept-Language`
- `Accept-Encoding`
- `DNT`

These headers are combined into a string and hashed using MD5 from Node’s `crypto` module.  
If the fingerprint is new → it is logged as `NEW`.  
If it returns again → it’s logged as `RETURNING`.

---

## 🧪 Tested Clients (6+)

| Client Type | Device / Browser |
|-------------|------------------|
| Chrome | MacBook Air |
| Safari | MacBook Air |
| Firefox / Brave / Edge | MacBook Air |
| cURL | Terminal |
| Incognito / Private Mode | Chrome |
| iPhone | Safari |

---

## 🖼️ Screenshot of Fingerprints
**(Insert the screenshot you just took here — the one you sent me)**

---

## 📂 Links to Code
All code is inside directory `6/`:
- `server.js`
- `fingerprints.log`
- `README.md`

---

## 🎥 YouTube Demonstration Link  
(Will be added after I record the demo)


