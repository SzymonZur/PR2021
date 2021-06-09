# Poll App with NodeJS/MongoDB

Aplikacja do przeprowadzania anonimowych ankiet przez użytkowników serwisu.

## Spis treści

- [Opis](#opis)
  - [Za pomocą](#za-pomocą)
- [Author](#author)

## Opis

Projekt i implemetacja systemu webowego umożliwiającego głosowanie (lub ankietowanie)
w sposób umożliwiający zachowanie anonimowości użytkowników.
System zrealizowany w formie aplikacji webowej powinien uwzględniać możliwość oddania głosu lub wyrażenia opinii w taki sposób, aby realizować następujące funkcje:
* informacje przechowywane w bazie danych,
* reprezentacja nie umożliwia powiązania użytkownika z konkretnymi danymi,
* reprezentacja umożliwia sprawdzenie czy dana osoba przekazała dane,
* reprezentacja umożliwia sprawdzenie przez użytkownika czy jego dane są zapisane w bazie.

### Za pomocą

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

## Uruchamianie

Aby uruchomić aplikacje należy:
- Pobrać pliki
- Zainstalować paczki dzięki npm 
- Dodać do folderu "config" plik o nazwie "keys.js" w który w środku będzie klucz do swojej bazy z MongoDB

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
    $ cd PROJECT_TITLE


## Running the project

    $ node app.js

