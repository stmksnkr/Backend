const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    email : String,
    dob : String
});

module.exports = mongoose.model("users",cardSchema);

