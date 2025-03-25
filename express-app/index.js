const express = require('express');
const bodyParser = require('body-parser'); // Moved this to the top

const app = express();

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// bodyParser Middleware (not needed separately, but keeping it for clarity)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express App');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send("User logged in successfully");
});

// Middleware to log request details
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("Protocol:", req.protocol);
    console.log("Host:", req.get('host'));
    console.log("URL:", req.originalUrl);

    next(); // Call next() to continue request processing
});

// Export the app
module.exports = app;
