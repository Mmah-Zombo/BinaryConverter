const History = require('../models/History');

module.exports = async (req, res) => {
    const histories = await History.find({userid : req.session.userId}).populate('userid');
    const current_user = authUser;
    res.render('history', { histories, current_user, successMessage: req.flash('successMessage') });
};