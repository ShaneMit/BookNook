# Book Nook 
This application allows a user to search for a book and find information on it plus a link to purchase. The user can also save the book to create a wish list. 
<br>
<br>
App link:  https://cozybooknook.herokuapp.com/

## Installation
The software used to create this generator include: React, Material-UI, Node, Mongo, Axios, dotenv, and Express. 

**Please use 'npm init -y' followed by npm-i to install the NPM dependencies. Upon installation, confirm that all the packages were installed and appear in your package.json file.**
<br>
<br> 
If the dependencies listed above did not appear in your package.json file after running npm init-i, please run the following commands:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO: npm i mongoose
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AXIOS: npm i axios
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENV: npm i dotenv
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS: npm i express
<br>

## Usage
Book Nook uses the Google Books API to allow the user to search for any book that they wish to find more information on. 

When the user searches for a book title, they are presented with a card of information. The card includes a picture of the book's cover, the title, the author, and a brief description. The card also gives the user the option to save the book to the saved section to view later. The user can also click the "VIEW BOOK" link on the card to be taken to the book's page on the Google Play Store.

The user can keep a list of their saved books and delete them as needed.

## Demo

![Demo Gif](public/assets/images/BookNook.gif)