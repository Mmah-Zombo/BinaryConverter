module.exports = (req, res) => {
    const data = req.flash('data')[0];
    let email, password = "";
    if (data) {
        email = data.email;
        password = data.password;
    }
    res.render('login', { email, password, errorMessage: req.flash('errorMessage') })
};