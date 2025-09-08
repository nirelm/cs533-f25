# Assignment 2, CS 433/533 Web Security, Fall 2025

Due: **2025-09-21**

Points available: 15

## node.js, express, cookie-parser

* Install node.js, express, and cookie-parser on your local machine

## set up a server 

1. Set up and run a server on your local machine
2. Install four "paths" on your server, with each path corresponds to four of your favorites — a personality (like an internet personality, artist, or musician), a place to visit, a song or book, and a movie or TV series. For example, my paths might be:
   * localhost:4000/taylorswift
   * localhost:4000/big-sur.html
   * localhost:4000/born-a-crime
   * localhost:4000/a-silent-voice.html
3. For each path, have a sentence or two in HTML that explains why this is a favorite of yours
4. For each path, **set a cookie** that echos the corresponding favorite of yours (make up a syntax for your key-value pair, but keep the cookies human-readable)

## Youtube video

* Record your screen of you 
  1. viewing the files, 
  2. starting the server, 
  3. loading each of the four paths in your browser.  

Your grade depends on what is visible in your video. If it isn’t shown, it won’t be graded. Make sure the video and content are clearly visible.

## Submission

### 🔄 Sync your Fork before making changes (Important)

This makes sure your fork is up to date with the original repo and prevents conflicts later.

* Add the Upstream Repo (do only once)
```bash
git remote add upstream https://github.com/kritikagarg/cs533-f25.git
```
* fetch latest changes and updates
````git fetch upstream
git checkout main    #Switch to Your Main Branch
git rebase upstream/main #Update Your Main Branch
````

### Put files in your forked repo 
* In your local repo, create a new directory:

```
mkdir assignments/YOURLASTNAME/2
```

* For example, for me it would be:

```
mkdir assignments/Garg/2
```

* In this directory "2", upload the following files:
   1. upload all of your *.html,
   2. upload all of your *.js,
   3. **README.md** file that contains ( _You MUST include a README.md file._  )
      1. documents the assignment 2
      2. link to the Youtube video. 
* When finished, use GitHub to push your changes to fork:
````
git add .
git commit -m "Describe your changes here"
git push origin main
````
* Then inspect in your fork on GitHub (e.g., https://github.com/YOURGITHUBACCTNAME/cs533-f25).  If all looks good, issue a pull request (PR) to my repo

### Create a Pull Request
Go to your fork on GitHub → click Compare & Pull Request → submit

### Canvas URL submission

Submit the URL of your report/readme (not the URL of your repo) in Canvas under assignment1. 

If you make changes to your report after submitting in Canvas, I will use the last commit time in your repo as your assignment submission time.


## Extra Credit (2 points)

* install and demonstrate a favicon.ico for your site
