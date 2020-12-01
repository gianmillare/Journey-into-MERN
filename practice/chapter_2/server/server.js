// step 1: require express
const express = require("express");

// step 2: variable app assigned to exress function
const app = express();

// Step 3: Choose an option below
// Option 1: use fileservermiddleware
const fileServerMiddleware = express.static('public');
app.use('/', fileServerMiddleware);

// Option 2: ex-fileServerMiddleware
// app.use(express.static('public'));

// Step 4: Call on localhost 3000
app.listen(3000, function() {
    console.log('App started on localhost3000!');
});