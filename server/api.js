var express = require('express');
const router = express.Router();
var Victim = require('./victimDB');

router.get('/', function(req, res){
    res.send('api');
});
router.get('/victims', function(req, res){
    Victim.find({}).then(function(data){
        res.send(data);
    })
});

module.exports = router;