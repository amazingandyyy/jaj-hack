var express = require('express')
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var controller = require('./controller');
var controllerBot = require('./controllerBot');

mongoose.connect('localhost:27017');
mongoose.promise = global.promise;

var api = require('./api');

app.get('/', function (req, res) {
  res.send({
    "info": {
      "author": "amazingandyyy",
      "license": "MIT",
      "contact": "www.amazingandyyy.com",
      "version": "0.0.2",
      "repo": "https://github.com/amazingandyyy/jaj-server"
    }
  });
})

app.get('/incoming-sms', function(req, res) {
  controller(req.query);
  res.sendStatus(200);
})

// app.get('/newUsersss', function(req, res) {
//   controllerBot(req.body.users);
// })
// controllerBot();
app.use('/api', api)

app.listen(4000, (err, good)=>console.log('on 4000'));