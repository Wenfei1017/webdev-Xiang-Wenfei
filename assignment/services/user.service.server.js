module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Something went wrong");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findUser(req, res) {
    console.log('find user from server side')
    if (req.query["password"]) {
      findUserByCredentials(req, res);
    } else {
      findUserByUsername(req, res);
    }
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the username");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    userModel.findUserByCredentials(username, password).then(
      function (user) {
        console.log('user = ' + user);
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user with the username and password");
        }
      },
      function (err) {
        console.log('from finduserbycredential')
        res.sendStatus(400).send(err);
      }
    );
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    console.log(userId)
    userModel.findUserById(userId).then(
      function (user) {
        if (user) {
          res.json(user);
          console.log("success")
        } else {
          res.sendStatus(400).send("Cannot find user with the ID");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var updatedUser = req.body;
    userModel.updateUser(userId, updatedUser).then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(400).send("Cannot find user")
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    userModel.deleteUser(userId).then(
      function (stats) {
        res.json(stats);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }
}
