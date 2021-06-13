# Routes in Poll App with NodeJS/MongoDB

## Description

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.
These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

## Files structure

- answerPoll.js
- checkHash.js
- index.js
- polls.js
- surveys.js
- users.js

### answerPoll route

In answerPoll we have routes like:

- manage
  * manage/:id 
- saveAnswer/:id

**manage route** - view a data from answerPoll controller.   
  
**manage/:id route** - view a data from getQuest controller for specific id.  
  
**saveAnswer/:id** - it is POST method which saves and hash the responses from the survey.

### checkHash route

In checkHash we have routes like:

- insertHash
- verifyHash

**insertHash route** - view a insertHash.ejs from views.
  
**verifyHash route**- it is POST method which takes the given data and analyzes if they agree with the database. If so, the user's answers will appear. Otherwise, an appropriate message will appear.

### index route

In index we have routes like:

- /
- dashboard

**/ route** - view a welcome page.
  
**dashboard route** - view a dashboard page.

### polls route

In polls we have routes like:

- yourPolls
- yourPolls/:id
- yourPolls/:id/invate
- yourPolls/addTo/:id
- invatedUsers
- yourPolls/:id/answers

**yourPolls route** - displays a list of available polls by the user.
  
**yourPolls/:id route** - It displays a list of options (Invate users/invated users/Check Answers) for a given poll. 

**yourPolls/:id/invate route** -  It displays a list of users avaible to invate.
    
**yourPolls/addTo/:id  route** -  It is POST method which saves connection between user and survey.
    
**invatedUsers route** - It displays a list of invated users.
  
**yourPolls/:id/answers** - It displays a list of given answers for current poll.

### surveys route

In surveys we have routes like:

- createSurvey
- createSurvey (post)

**createSurvey route** - displays createSurvey from views.  
  
**createSurvey (post) route** - It is POST method which saves new create survey to database.


### users route

In users we have routes like:

- login
- login (post)
- register
- register (post)
- logout

**login route** - displays login page from views.  
  
**login (post) route** - It is POST method which allows you to log into the website.
  
**register route** - displays register page from views.  
  
**register (post) route** - It is POST method which allows user to sign up to the website.

**logout route** - It is POST method which logout user from website.

