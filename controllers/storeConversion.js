const History = require('../models/History');

module.exports = (req, res) => {
    History.create({
        ...req.body,
        userid: req.session.userId
    })
    .then((result) => {
        console.log("sucessfully created");
    })
    .catch(err => {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        console.log(err);
    });
    res.send("sent");
}
