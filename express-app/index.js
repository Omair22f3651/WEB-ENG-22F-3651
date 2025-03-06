const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- Add this

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express App');
});

app.post('/login', (req, res) => {
    console.log(req.body); // Check the parsed request body
    res.send("User logged in successfully");
});
const bodyParser = require('body-parser'); // Import body-parser

// Middleware to parse URL-encoded form data and JSON
app.use(bodyParser.urlencoded({ extended: false })); // ✅ Correct syntax
app.use(bodyParser.json()); // ✅ Correct syntax

// Export the app
module.exports = app;
