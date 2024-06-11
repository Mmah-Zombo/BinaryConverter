const History = require('../models/History');
const User = require('../models/User');

module.exports = async (req, res) => {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    if (loggedIn && (loggedIn == user_id)) {
        History.deleteMany({userid: user})
        .then(() => {
            User.deleteOne({_id: user_id})
            .then(() => {
                req.session.destroy();
                res.redirect('/')
            })
            .catch(err => {
                console.log(err);
                res.redirect('/');
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        });
        
    }
}