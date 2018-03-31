module.exports = function (app){
  require("./services/user.service.server")(app);
  require("./services/website.service.server")(app);
  require("./services/widget.service.server")(app);
  require("./services/page.service.server")(app);

  var db = require("./model/models.server");
};

// module.exports = function (app) {
//  // APIs belong to USER
// app.get('/api/user', function(req, res){
//   console.log("message from app.js");
//   res.send("");
// });
//
// }

// do the something in services(user services)
