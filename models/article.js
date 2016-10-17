var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

  

var ArticleSchema = new Schema({
    // my props
		
		
  		title   : {type:String, unique:true}
  		, date    : {type:Date}
  		, link : {type:String, unique:true}
		, excerpt: String
});