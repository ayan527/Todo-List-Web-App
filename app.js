// Importing NPM packages
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of express package
const app = express()

// Setting a view engine
app.set('view engine','ejs');

// Setting the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Initializing some global server related constants
const homeRoute = '/';
const portNo = 3000;

// Initializing an empty todo list
const todo_items = [];
// Assigning few todo list items
todo_items.push('Body Workout','Open Udemy','Cook food');

// Initializing an object to exract specific information from current date
const locale = 'en-US';
const options = {
  weekday: 'long',
  month: 'long', 
  day: 'numeric'
}

// Responding to home-page request
app.get(homeRoute, function(req,res){
  //res.sendFile(__dirname+'/index.html');

  // Getting today information
  const current_date = new Date()
  const formatted_date = current_date.toLocaleDateString(locale,options);
  const week_day = formatted_date.split(',',1)[0];
  //console.log(formatted_date.split(',',1)[0]);


  // Rendering an EJS template
  res.render('list_template',{weekday: week_day, day: formatted_date, todoList : todo_items});
});

// Respond to a post-request on home-page
app.post(homeRoute, function(req,res) {
  // Get the new item
  const newItem = req.body.newItem;
  // Push the new item
  todo_items.push(newItem);
  // Redirect to get-request home route
  res.redirect(homeRoute);
})

// Listening to a port
app.listen(portNo, function(){
  console.log('Server listening to port no 3000');
})