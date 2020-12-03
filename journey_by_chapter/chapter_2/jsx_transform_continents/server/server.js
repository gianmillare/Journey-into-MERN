// Step 1: assign express to a variable and have it required
const express = require('express');

// Step 2: assign the express function to another variable
const app = express();

// Step 3: connect the express server to the public folder
app.use(express.static('public'));

// Step 4: Render the pages onto localhost:3000
app.listen(3000, function() {
    console.log("App is running on localhost:3000!");
});