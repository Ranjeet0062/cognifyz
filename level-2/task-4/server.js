// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'text/javascript');
        }
    }
}));
// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (like HTML)
// app.use(express.static('public'));

// Temporary storage for validated form data
let formData = [];

// Render index.ejs for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    // Server-side validation
    console.log(req.body)
    const { name, email, username, password, confirm_password, address, phone, country } = req.body;
    if (!name || !email || !username || !password || !confirm_password || !address || !phone || !country) {
        return res.status(400).send('All fields are required');
    }
    if (password !== confirm_password) {
        return res.status(400).send('Passwords do not match');
    }
    // Additional validation logic can be added here

    // Store validated data
    formData.push({
        name,
        email,
        username,
        password,
        address,
        phone,
        country
    });
    console.log("data is",formData)
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
