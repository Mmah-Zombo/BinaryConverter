// Import the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressSession = require('express-session');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');

// Import the controllers
const signupView = require('./controllers/registerView');
const loginView = require('./controllers/loginView');
const appView = require('./controllers/appView');

// Mongodb Connection
mongoose.connect('mongodb://localhost:27017/BitConvertPro');

// Create an instance of Express app
app = express();

// Register static files
app.use(express.static('public'));

// Configure the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileupload());

app.use(flash());

// Application routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', signupView);
app.get('/login', loginView);

app.get('/bit-convert-pro', appView);

app.listen(4000, () => {
    console.log('App started at http://localhost:4000');
});