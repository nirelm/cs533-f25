# Assignment 6 — Browser Fingerprinting   

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

<img width="826" height="771" alt="Screenshot 2025-11-24 at 19 32 30" src="https://github.com/user-attachments/assets/c2da8fa9-4fe0-43f0-a88a-6a0c07a8e687" />
<img width="559" height="348" alt="Screenshot 2025-11-24 at 19 26 39" src="https://github.com/user-attachments/assets/f1d3ccde-d1e2-4eb2-aeba-1e0e38d45c59" />
<img width="1338" height="554" alt="Screenshot 2025-11-24 at 19 43 59" src="https://github.com/user-attachments/assets/6b7812c3-19c3-41d0-9fb9-13cdc14f6e41" />

<img width="1048" height="647" alt="Screenshot 2025-11-24 at 19 03 35" src="https://github.com/user-attachments/assets/1f1d80fa-8ba2-4d0a-9523-6dd579228809" />
<img width="649" height="450" alt="Screenshot 2025-11-24 at 18 36 03" src="https://github.com/user-attachments/assets/d839fbd4-7973-4128-9faf-371cfcda87c8" />



## 🎥 YouTube Demonstration Link  
(https://youtu.be/9YT1Wbfq1no)



