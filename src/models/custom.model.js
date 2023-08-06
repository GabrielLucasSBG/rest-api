require('dotenv/config');
let mongoose = require('mongoose');

mongoose.connect(process.env.CONNECT);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);