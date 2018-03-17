module.exports = function (app) {

  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("api/user/:userId", deleteUser);
  app.get("/api/user", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function createUser(req, res) {
    var user = req.body;
    for (var x = 0; x < users.length; x++) {
      if (users[x].username === user["username"]) {
        res.status(404).send("This username is already exist.");
        return;
      }
    }

    user._id = Math.random().toString();
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function findAllUsers(req, res) {
    res.json(users);
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password) {
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function updateUserById(req, res) {
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].password = user.password;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        res.json(users[i]);
        return;
      }
    }
    res.status(404).send("Cannot find user with username: " + username);
  }

  function findUserByCredentials(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.json(users[i]);
        return;
      }
    }
    res.status(404).send("Username and password did not match.");
  }

  // function deleteUser(req, res) {
  //   var userId = req.params['userId'];
  //   for (var i = 0; i < users.length; i++) {
  //     if (users[i]._id === userId) {
  //       res.json(users[i]);
  //       users.splice(i, 1);
  //       return;
  //     }
  //   }
  //   res.status(404).send("User cannot be found!");
  // }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    for (const i in users) {
      if (users[i]._id === userId) {
        const j = +i;
        users.splice(j, 1);
      }
    }
    res.send("success");
  }
};
