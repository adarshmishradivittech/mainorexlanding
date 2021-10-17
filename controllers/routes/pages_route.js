var express = require('express');
var router = express.Router();
var app = express();
var path=require('path')
var mongoose = require('mongoose');
var serveStatic= require('serve-static')
var session = require('express-session')
const subscriberModel= require('../../models/subscribers_model')
const contactModel= require('../../models/contact_model')
const adminModel= require('../../models/admin_model')

app.get('/',function(req,res){


     
    res.sendFile(path.join(__dirname,'../../views/pages/index.html'))
    
    // res.send("home")
})



app.post('/contactdata', function(req, res){
  
    const a=req.body;
    const blog=new contactModel({
        name:a.contactname,
        email:a.contactemail,
        mobileno:a.Phone,
        country:a.contactcountry,
        business:a.businessname,
        company:a.contactcompany,
        industry:a.contactindustry,
        interest:a.contactinterest,
        employees:a.contactemployees,
        known:a.contactknow,
        message:a.Message,
       
      }) 
    
      blog.save()
    res.send("We will contact you soon");
    
     
    });
    
    
    
    app.post('/subscribedata', function(req, res){
      
      const a=req.body;
      const blog=new subscriberModel({
        email:a.email2,
        mobileno:a.name2,
		
      }) 
    
      blog.save()
      res.send("Thank you for subscribing us");
      
       
      });

      app.get('/adarsh',function(req,res){

        console.log(req.session.email)
        res.send("Adarsh")
      })

module.exports=app;