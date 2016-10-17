var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Noteschema = new Schema({
    // my props
    title     : {type:String, unique: true, required: "note title required"}
  , comments  : {type:String, required:"comment required"}
});