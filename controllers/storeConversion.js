const History = require('../models/History');

module.exports = (req, res) => {
    if (authUser) {
        History.create({
            ...req.body,
            userid: req.session.userId
        })
        .then((result) => {
            console.log("sucessfully created");
            console.log(req.session.userId);
            
        })
        .catch(err => {
            const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
            req.flash('validationErrors', validationErrors);
            console.log(err);
        });
        res.send("sent");
    } else {
        res.send("error creating")
    }
}
