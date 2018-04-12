module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var LocalStrategy = require('passport-local').Strategy;
  var passport = require('passport');
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  var facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
    // clientID     : '789222517955181',
    // clientSecret : '994a779ee2dcd248942a8c06ed36479d',
    // callbackURL  : 'https://webdev-wenfei.herokuapp.com/auth/facebook/callback'
  };


  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post("/api/user",   createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.post ('/api/loggedin', loggedin);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));



  function login(req, res) {
    console.log('server login');
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    return userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  //this function handle the login in
  // function localStrategy(username, password, done) {
  //   userModel
  //     .findUserByCredentials(username, password)
  //     .then(
  //       function(user) {
  //         // if(user.username === username && user.password === password) {
  //         if(user) {
  //           return done(null, user);
  //         } else {
  //           return done(null, false);
  //         }
  //       },
  //       function(err) {
  //         console.log('error here');
  //         if (err) { return done(err); }
  //       }
  //     );
  // }

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
  }

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
    var user = req.body;
    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      }, function(err) {
        res.status(500).json(err);
      });
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

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: 'username',
              password: 'password',
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

}
