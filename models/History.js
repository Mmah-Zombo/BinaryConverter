const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema(table)
const HistorySchema = new Schema({
    binary: {
        type: String,
        required: true,
    },
    conversion: {
        type: String,
        required: true,
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
});

// Creates a model our we will use to interact with the table
const History = mongoose.model('History', HistorySchema);
module.exports = History;