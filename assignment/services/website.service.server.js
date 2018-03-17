module.exports = function(app) {
  // var WEBSITES = require("./website.mock.server.js");

  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);

  var websites = [
    // {"_id": "321", "name": "Facebook", developerId: "123"},
    // {"_id": "432", "name": "Twitter", developerId: "234"},
    // {"_id": "234", "name": "Amazon", developerId: "345"},
    // {"_id": "333", "name": "MyWebSite", developerId: "123"}
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    {_id: "890", name: "Go", developerId: "123", description: "Lorem"},
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    {_id: "789", name: "Chess", developerId: "234", description: "Lorem"}
  ];

  function updateWebsiteById(req, res) {
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = newWebSite;
        break;
      }
    }
    res.json(getWebsitesForUserId(userId));
  }

  // function findWebsiteById(req, res){
  //   var user = req.params['userId'];
  //   var websiteId = req.params['websiteId'];
  //   res.json(getWebsiteById(websiteId));
  // }
  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        return res.json(websites[i]);
      }
    }
    res.status(404).send("Cannot find the website");
  }

  function deleteWebsite(req, res) {
    // var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i, 1);
        res.send('success');
      }
    }

  }

  // function createWebsite(req, res){
  //   var userId = req.params['userId'];
  //   var website = req.body;
  //   website._id = (new Date()).getTime() + "";
  //   website.developerId = userId;
  //   WEBSITES.push(website);
  //   var websites = getWebsitesForUserId(userId);
  //   res.json(websites);
  // }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId && websites[i].name === website.name) {
        res.status(404).send("This website is already exist.");
        return;
      }
    }
    website._id = (websites.length + 1).toString();
    website.developerId = userId;
    websites.push(website);
    res.json(website);
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    var resultSet = [];
    for(var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        resultSet.push(websites[i]);
      }
    }
    res.json(resultSet);
  }

  function getWebsitesForUserId(userId) {
    var websites = [];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        websites.push(websites[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId) {
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        return websites[i];
      }
    }
  }
};

