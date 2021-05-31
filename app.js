// Importing NPM packages
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of express package
const app = express()

// Setting a view engine
app.set('view engine','ejs');

// Setting the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Initializing some global constant variables
const homeRoute = '/';
const portNo = 3000;

// Responding to home-page request
app.get(homeRoute, function(req,res){
  res.sendFile(__dirname+'/index.html');
});

// Listening to a port
app.listen(portNo, function(){
  console.log('Server listening to port no 3000');
})