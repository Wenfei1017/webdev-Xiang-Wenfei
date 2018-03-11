// //
// // // Get the dependencies
// //
// // const express = require('express');
// // const path = require('path');
// // const http = require('http');
// // const bodyParser = require('body-parser');
// // const app = express();
// //
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// //
// //
// //
// //
// // // Point static path to dist -- For building -- REMOVE
// // app.use(express.static(path.join(__dirname, 'dist')));
// //
// //
// //
// // // CORS
// // app.use(function(req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// //   next();
// // });
// //
// //
// //
// //
// // const port = process.env.PORT || '5000';
// // app.set('port', port);
// //
// //
// // // Create HTTP server
// // const server = http.createServer(app);
// //
// // server.listen( port );
// // const server = http.createServer(app);
// //
// // /*
// // // For Build: Catch all other routes and return the index file -- BUILDING
// // app.get('*', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'dist/index.html'));
// // });
// // */
// //
// //
// // server.listen( port , () => console.log('Running on port 5000'));
//
// var express = require('express');
// const path = require('path');
// const http = require('http');
// var bodyParser = require('body-parser');
// var app = express();
// require("./assignment/app.js")(app);
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // Point static path to dist -- For building -- REMOVE
// app.use(express.static(path.join(__dirname, 'dist')));
//
// // CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });
//
// const port = process.env.PORT || '3100';
// app.set('port', port);
//
// // Create HTTP server
// const server = http.createServer(app);
//
// //var serverSide = require("./server/test-mongodb/app");
// //serverSide(app);
//
// // For Build: Catch all other routes and return the index file -- BUILDING
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// server.listen( port , () => console.log('Running'));
// app.listen(port, ipaddress);

var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  next();
})

const port=process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
});


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
// var hello = require('./hello');
// hello(app);
//
//
// require("./assignment/app")(app);


// server.listen( port , function() {
//   console.log('Node app is running on port', app.get('port'))});

server.listen( port , () => console.log('Running'));

