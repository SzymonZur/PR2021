# Controllers in Poll App with NodeJS/MongoDB

## Description

Controllers are the callback functions we passed to the router methods.
A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

## Files structure

- getPolls.js
- getQuestion.js

### getPolls controller

In getPolls controller we have four callback functions: 

- **List** 
    * It is used to find the list of polls of the user who created them.
- **users**
    * Finds users who are not invited to the survey.
- **invated**
    * Finds users who are invited to the survey.
- **answers**  
    * It is used to find answers from surveys submitted by users.

### getQuestion controller

In getPolls controller we have four callback functions: 

- **answerPoll**
    * Finds users who have not yet responded to the survey.
- **getQuest**
    * It is used to search for surveys.


