var mongoose = require('mongoose');



var contactSchema = mongoose.Schema({
 name:String,
 email:String,
 mobileno:String,
 country:String,
 business:String,
 company:String,
 industry:String,
 interest:String,
 employees:String,
 known:String,
 message:String,

  
  });

    // Compile model from schema
var contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel;