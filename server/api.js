var express = require('express');
const router = express.Router();
var Victim = require('./model');

router.get('/', function(req, res){
    res.send('api');
});

router.get('/victims', function(req, res){
    Victim.find({}).then(function(data){
        res.send(data);
    })
});

router.get('/victim/:phone', function(req, res){
    Victim.findOne({
        msisdn: req.params.phone
    }).then(function(data){
        if(data) return res.send(data);
        res.sendStatus(404);
    })
});

module.exports = router;