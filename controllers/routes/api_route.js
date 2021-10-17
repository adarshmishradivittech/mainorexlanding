var express = require('express');
var router = express.Router();
var app = express();
var path=require('path')
var serveStatic= require('serve-static')
var session = require('express-session')
const subscriberModel= require('../../models/subscribers_model')
const contactModel= require('../../models/contact_model')
const adminModel= require('../../models/admin_model')
var {static,validation} = require('../middlewares/api_middleware')


var session = require('express-session')

app.use(session({
  secret: 'adarsh',
  resave: false,
  saveUninitialized: true,
  
}))

 
app.get('/admincontact', validation(),function(req,res){

    var k=contactModel.find({});
k.sort({_id:'descending'}).exec(function(err,data){
if (err) throw err;
res.send(data);
})

  })


  app.get('/adminsubscriber',validation(),function(req,res){

    var k=subscriberModel.find({});
k.sort({_id:'descending'}).exec(function(err,data){
if (err) throw err;
res.send(data);
})

  })


  app.get('/adminlogin',validation(),function(req,res){

    var k=adminModel.find({});
k.sort({_id:'descending'}).exec(function(err,data){
if (err) throw err;
res.send(data);
})

  })


module.exports=app;