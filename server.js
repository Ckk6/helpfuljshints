var express = require('express');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var request = require('request');





var app = express();


//connect to static folders
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

//require collections

var note = require('./models/note.js');

var article = require('./models/article.js');

mongoose.connect('mongodb://localhost/scrape');

//establish connection to mongoose

var db = mongoose.connection;

//test connection for errors
db.on('error', function (err) {
console.log('Mongoose Error: ', err);
});
db.once('open', function () {
console.log('Mongoose connection successful.');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('connected to', port);
});

//homepage or root (html)
app.get('/', function(req,res){
	res.send('index.html');
});