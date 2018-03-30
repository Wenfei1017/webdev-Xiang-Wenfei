var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev');
var db = mongoose.connect('mongodb://wenfei123:xwf455804669@ds127139.mlab.com:57097/heroku_wq4lb13n');

// var pageModel = require("../model/page/page.model.server");
// pageModel.createPage('5abc4cca613c7994c9b7a044',)


module.exports = db;
