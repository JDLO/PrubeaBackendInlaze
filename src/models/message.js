const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    tittle: { type: String},
    description:{ type: String},
    date_make: {type: Date},
    personId: {type: String}
});

module.exports = Message = mongoose.model('Message', MessageSchema);
