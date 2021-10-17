var mongoose = require('mongoose');



var adminSchema = mongoose.Schema({
  firstname:String,
  lastname:String,
  email:String,
  password:String,
  
  }); 

    // Compile model from schema
var adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;