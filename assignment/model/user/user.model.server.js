var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var User = mongoose.model('User', UserSchema);

User.createUser = createUser;
User.findUserById = findUserById;
User.findUserByUsername = findUserByUsername;
User.findUserByCredentials = findUserByCredentials;
User.updateUser = updateUser;
User.deleteUser = deleteUser;

module.exports = User;

function createUser(user) {
  return User.create(user);
}

function findUserById(userId) {
  return User.findById(userId);
}

function findUserByUsername(username) {
  return User.findOne({username: username});
}

function findUserByCredentials(username, password) {
  console.log('username= ' + username);
  console.log('password= ' + password);
  // console.log(User.findOne({username: username, password: password}));
  return User.findOne({username: username, password: password});
}

// function updateUser(userId, user) {
//   return User.findByIdAndUpdate(userId, user);
// }
function updateUser(userId, user) {
  return User.update({_id: userId}, user);
}

function deleteUser(userId) {
  return User.findByIdAndRemove(userId);
}
