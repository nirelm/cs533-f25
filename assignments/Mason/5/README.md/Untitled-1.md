# Assignment 5 – CS 433/533 Web Security (Fall 2025)


---

## ⚙️ Overview
This assignment demonstrates how browser security mechanisms such as **CORS** (Cross-Origin Resource Sharing) and **Content-Security-Policy (CSP)** affect communication and embedding between different origins.  
Three local Node.js servers were configured to show:
- CORS blocking/allowing JSON responses  
- CORS blocking/allowing custom HTTP headers  
- CSP allowing or blocking content embedding  

---

## 🧩 Part 5.1 – CORS: Blocking & Reading JSON Response from Another Origin
**Goal:** Show that JavaScript running on one origin cannot read JSON responses from another origin without proper CORS headers.

### Steps:
- Two Node.js servers created using Express:
  - **Server 1:** `http://localhost:8080`
  - **Server 2:** `http://localhost:8081`
- JavaScript in an HTML file on Server 1 attempted to fetch a `.json` file from Server 2.
- Initially, the response was **blocked** due to missing `Access-Control-Allow-Origin`.
- After adding  
  ```js
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
