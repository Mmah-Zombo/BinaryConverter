module.exports = (req, res) => {
    const data = req.flash('data')[0];
    let fullname, email, password = "";
    if (data) {
        fullname = data.fullname;
        email = data.email;
        password = data.password;
    }
    res.render('signup', { fullname, email, password, validationErrors: req.flash('validationErrors') })
};