const express = require('express');

const app = express();

// To run the server, you have two options.
// Option 1: fileServerMiddleware
const fileServerMiddleware = express.static('public');
app.use('/', fileServerMiddleware);

// Option 2: combining the above to function 'use'
// app.use(express.static('public'));

app.listen(3000, function() {
    console.log('App started on port 3000');
})