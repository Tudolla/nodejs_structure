const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Student = new Schema({
  
  name: {type:String, maxLength:255},
  age: {type:String,maxLength:255},
  des: {type:String,maxLength:255},
});

module.exports = mongoose.model('student',Student );
