module.exports = (req, res) => {
    const current_user = authUser;
    res.render('app', {current_user});
}