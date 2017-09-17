var mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
    'msisdn': String,
    'messageId': String,
    'text': String,
    'messages': [String],
    'message-timestamp': String,
    "coordinate": {
        "LON": String,
        "LAT": String,
        "DIR_LAT": String,
        "DIR_LON": String,
        "X": String,
        "Y": String
    }
});

module.exports = mongoose.model('Victim', victimSchema);