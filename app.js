// Importing NPM packages
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");

// Creating an instance of express package
const app = express()

// Setting a view engine
app.set('view engine','ejs');

// Setting the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Using public folder to load static files
app.use(express.static('public'));

// Initializing some global server related constants
const homeRoute = '/';
const portNo = 3000;

// Initializing an empty todo list
const todo_items = [];
const work_items = [];
// Assigning few todo list items
todo_items.push('Body Workout','Open Udemy','Cook food');


// Responding to home-page request
app.get(homeRoute, function(req,res){
  //res.sendFile(__dirname+'/index.html');

  // Getting today information
  const formatted_date = date.getDate();
  const is_week_day = date.isWeekDay();
  //console.log(formatted_date.split(',',1)[0]);


  // Rendering an EJS template
  res.render('list_template',{isWeekDay: is_week_day, day: formatted_date, todoList : todo_items});
});

// Responding to work-page request
app.get(homeRoute+"work",function(req,res) {
  const is_week_day = date.isWeekDay();
  const week_day = date.getDay();
  res.render('list_template',{isWeekDay: is_week_day, day: "Work on "+week_day, todoList : work_items})
})

// Respond to a post-request on home-page
app.post(homeRoute, function(req,res) {
  // Get the new item
  const newItem = req.body.newItem;

  //Check if working page/todo page
  if(req.body.page.includes("Work")) {
    // Push the new item in work list
    work_items.push(newItem);
    // Redirect to get-request work route
    res.redirect(homeRoute+"work");
  } else {
    // Push the new item in todo list
    todo_items.push(newItem);
    // Redirect to get-request home route
    res.redirect(homeRoute);
  }
})

// Listening to a port
app.listen(portNo, function(){
  console.log('Server listening to port no 3000');
})