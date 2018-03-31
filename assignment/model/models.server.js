var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev');
var db = mongoose.connect('mongodb://wenfei1:123456@ds127139.mlab.com:57097/heroku_wq4lb13n');

module.exports = db;
