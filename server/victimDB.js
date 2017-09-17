var mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
    phone: String,
    location: Object
});

module.exports = mongoose.model('Victim', victimSchema);