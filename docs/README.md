# Poll App with NodeJS/MongoDB

App for conducting anonymous surveys

## Description

Design and implementation of a web system enabling voting (or polls) in a way that allows users to remain anonymous. The system implemented in the form of a web application should include the possibility of voting or expressing an opinion in such a way as to perform the following functions:

* information stored in the database,
* representation does not allow the user to be associated with specific data,
* representation allows you to check whether a given person has provided data,
* representation enables the user to check whether his data is saved in the database.

### Build with

- HTML (ejs)
- CSS custom properties
- Bootstrap
- Vanilla JS
- NodeJS
    * bcrypt
    * hash.js
    * passport
    * express
- MongoDB

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.1

    $ npm --version
    6.14.12

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/SzymonZur/PR2021
    $ cd PR2021
    
    After that you need to create file "keys.js" in your config folder.
    Add your key for MongoDB database to keys.js.


## Running the project

    $ node app.js

## Authors

- Szymon Żur - Linkedin - [@szymonżur](https://www.linkedin.com/in/szymon%C5%BCur/)
- Maksymilian Świętoń