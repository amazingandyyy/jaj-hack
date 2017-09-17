var mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
    'msisdn': String,
    'messageId': String,
    'messages': [{
        "content": String,
        "timestamp": String
    }],
    "coordinates": [{
        "LON": String,
        "LAT": String,
        "DIR_LAT": String,
        "DIR_LON": String,
        "X": String,
        "Y": String,
        "timestamp": String
    }]
});

module.exports = mongoose.model('Victim', victimSchema);