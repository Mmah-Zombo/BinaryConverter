require('dotenv').config();
// Import the dependencies
const express = require('express');


// Create an instance of Express app
app = express();


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
const deleteUser = require('./controllers/deleteUser');

// Middleware Functions
const sessionSetter = require('./controllers/middlewares/sessionSetter');
const AuthUser = require('./controllers/middlewares/Auth');
const redirectIfNotLoggedIn = require('./controllers/middlewares/redirectIfNotLoggedIn');

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGODB_URI;

// Mongodb Connection
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// mongoose.connect('mongodb://localhost:27017/BitConvertPro');
mongoose.connect('mongodb+srv://NaryZombo:P9I7NzjOlpWqMEDG@cluster0.aknfp4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


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
app.get('/delete/user/:id', redirectIfNotLoggedIn, deleteUser);

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
});