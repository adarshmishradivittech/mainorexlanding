
var express = require('express');
var router = express.Router();
var app = express();
var path = require('path')
var serveStatic = require('serve-static')
var mongoose = require('mongoose');
const subscriberModel = require('../../models/subscribers_model')
const contactModel = require('../../models/contact_model')
const adminModel = require('../../models/admin_model')
var { static, validation } = require('../middlewares/dashboard_middleware')
const apiRouter = require('./api_route')




app.set('views', path.join(__dirname, '../../views/dashboard'));








app.get('/', function (req, res) {

  var k = adminModel.find({});
  k.sort({ _id: 'descending' }).exec(function (err, data) {
    if (err) throw err;
    else {
      req.session.adminemail = data[0].email
      req.session.adminpassword = data[0].password
      res.render('utility-login', { name: "adarsh" })
    }
    // req.session.adminemail=data[0].email
    // req.session.adminemail=data[0].password


  })



})



app.post('/logindata', function (req, res) {

  const a = req.body;


  //  console.log(a)
  req.session.email = a.email;
  req.session.password = a.password;
  // res.send(req.session.password)
  adminModel.findOne({ email: a.email, password: a.password }, function (err, data) {
    if (err) {
      throw err
    }


    else {
      if (!data) {
        res.redirect('/admin')
      }

      else {
        res.redirect('/admin/dashboard')
      }

    }
  })



})


app.get('/dashboard', validation(), function (req, res) {



  app.use('/', static(), serveStatic(path.join(__dirname, '../../views/dashboard')));

  res.sendFile(path.join(__dirname, '../../views/dashboard/index.html'))

})

app.post('/adminlogin', function (req, res) {

  const a = req.body;

  adminModel.update({
    firstname: a.adminfirstname,
    lastname: a.adminlastname,
    email: a.adminemail,
    password: a.adminpassword,
  }, function (err, data) {

    if (err) {
      throw err
    }

    else {

      console.log("data inserted")

    }
  })


  res.send("You detailes updated");

});


app.use('/', apiRouter);

app.get('/subdel/id=:id', function (req, res) {
  var id = req.params.id;
  subscriberModel.findOneAndRemove({ _id: id }, function (err, data) {
    if (err) throw err
    else {
      res.send(data)
    }
  });





})

app.get('/condel/id=:id', function (req, res) {
  var id = req.params.id;
  contactModel.findOneAndRemove({ _id: id }, function (err, data) {
    if (err) throw err
    else {
      res.redirect('/admin/tables.html')
    }
  });

})

app.get('/login', function (req, res) {

  req.session.destroy();
  res.redirect('/admin')

});

module.exports = app;









