const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: String,
    birth: String
});

module.exports = mongoose.model("Contacts", ContactSchema);