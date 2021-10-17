var mongoose = require('mongoose');



var subscriberSchema = mongoose.Schema({
  email:String,
  mobileno:String,
 
  
  }); 

    // Compile model from schema
var subscriberModel = mongoose.model('subscriber', subscriberSchema);

module.exports = subscriberModel;