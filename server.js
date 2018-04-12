const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');


// var connectionString = 'mongodb://localhost:27017/webdev';
var connectionString = 'mongodb://wenfei1:123456@ds157097.mlab.com:57097/heroku_wq4lb13n'; // for heroku
var mongoose = require("mongoose");
mongoose.createConnection(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(session({
  secret: 'S3CR3T!',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "https://webdev-wenfei.herokuapp.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  next();
});

const port=process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// For Build: Catch all other routes and return the index file -- BUILDING

// app.get('*', function (req, res) {
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
// });


//handle GET UR
// // APIs belong to USER
// app.post('/api/user', function(req, res){
//   res.send();
// }
// app.get('api/user/:userId', function(req, res) {
//   res.send();
// }
// var webaker = require('./assignment/app');
// webaker(app);
//

require("./assignment/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
});



server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});

// server.listen( port , () => console.log('Running'));

