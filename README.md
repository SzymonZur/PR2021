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

