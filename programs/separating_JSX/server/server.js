// step 1: create the variable express, have it require 'express'
const express = require('express');

// step 2: assign express function to a variable called "app"
const app = express();

// step 3: run the server using one of the below options
// Option 1: fileServerMiddleWare
const fileServerMiddleWare = express.static('public');
app.use('/', fileServerMiddleWare);
// Option 2: app.use and combine the above code into one line
// app.use(express.static('public'));

// step 4: launch the app on localhost 3000
app.listen(3000, function() {
    console.log("App started on localhost 3000!");
});