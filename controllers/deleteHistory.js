const History = require('../models/History');

module.exports = async (req, res) => {
    const history_id = req.params.id;
    const history = await History.findById(history_id);
    if (loggedIn && (loggedIn == history.userid._id)) {
        History.deleteOne({_id: history_id})
        .then(() => {
            const successMessage = "Deleted successfully";
            req.flash('successMessage', successMessage);
            res.redirect('/history')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/history');
        });
    }
}