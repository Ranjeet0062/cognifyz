const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (like HTML)
app.use(express.static('public'));

// Render index.ejs for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;

    // Here you can process the submitted data as needed
    console.log(`Received form submission: Name - ${name}, Email - ${email}`);
    res.send(`Form submitted successfully! and data is Received form submission: Name - ${name}, Email - ${email},Username - ${username},password - ${password}` );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
