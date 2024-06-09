const User = require('../models/User');
const flash = require('connect-flash');

module.exports = async (req, res) => {
    await User.create(req.body)
    .then((user) => {
        req.session.userId = user._id;
        console.log('User created');
        req.flash('message', 'Successfully created an account.');
        res.redirect('/bit-convert-pro');
    })
    .catch(err => {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        console.log(err);
        req.flash('data', req.body);
        return res.redirect('/signup');
    });
}
