// Step 1: assign express to a variable and have it required
const express = require('express');

// Step 2: assign express function to variable app
const app = express();

// Step 3: have render speak to a static file in public
app.use(express.static('public'));
// Optional Step 3
// const fileServerMiddleware = express.static('public');
// app.use('/', fileServerMiddleware);

// Step 4: have the app 'listen' to localhost:3000
app.listen(3000, function() {
    console.log('App is running on localhost:3000');
});