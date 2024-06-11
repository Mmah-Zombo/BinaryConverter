// Import the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressSession = require('express-session');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

// Import the controllers
const signupView = require('./controllers/registerView');
const loginView = require('./controllers/loginView');
const appView = require('./controllers/appView');
const registerUser = require('./controllers/registerUser');
const loginUser = require('./controllers/loginUser');
const storeConversion = require('./controllers/storeConversion');
const historyView = require('./controllers/historyView');
const logoutUser = require('./controllers/logoutUser');
const deleteHistory = require('./controllers/deleteHistory');

// Middleware Functions
const sessionSetter = require('./controllers/middlewares/sessionSetter');
const AuthUser = require('./controllers/middlewares/Auth');
const redirectIfNotLoggedIn = require('./controllers/middlewares/redirectIfNotLoggedIn');

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

app.use(session({
    secret: 'binary me'
}));

app.use(flash());

global.loggedIn = null;
global.authUser = null;

app.use('*', sessionSetter, AuthUser);

// Application routes
app.get('/', (req, res) => {
    const current_user = authUser;
    res.render('index', {current_user});
});

app.get('/signup', signupView);
app.get('/login', loginView);

app.get('/bit-convert-pro', appView);

app.get('/history', redirectIfNotLoggedIn, historyView);
app.get('/logout', redirectIfNotLoggedIn, logoutUser);
app.get('/docs', (req, res) => {
    const current_user = authUser;
    res.render('doc', {current_user});
})

app.post('/auth.signup', registerUser);
app.post('/auth.login', loginUser);
app.post('/store', redirectIfNotLoggedIn, storeConversion);
app.get('/delete/:id', redirectIfNotLoggedIn, deleteHistory);

app.listen(4000, () => {
    console.log('App started at http://localhost:4000');
});