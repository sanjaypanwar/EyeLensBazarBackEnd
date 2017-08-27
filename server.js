'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser=require('body-parser');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var product=require('./product/product');
var brand=require('./brand/brand');
var offer=require('./offers/offer');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/EyeLensBazarDB');

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


var routes=require('./routes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
