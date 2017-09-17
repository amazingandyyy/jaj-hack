var mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
    ID: String,
    phone: String,
    location: Object
});

module.exports = mongoose.model('Victim', victimSchema);