var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server");
var Website = mongoose.model('Website', WebsiteSchema);
var User = require('../user/user.model.server');

module.exports = Website;

Website.createWebsiteForUser = createWebsiteForUser;
Website.findAllWebsitesForUser = findAllWebsitesForUser;
Website.findWebsiteById = findWebsiteById;
Website.updateWebsite = updateWebsite;
Website.deleteWebsite = deleteWebsite;

// function createWebsiteForUser(userId, website) {
//   website._user = userId;
//   return Website.create(website);
// }
function createWebsiteForUser(userId, website) {
  // function createWebsiteForUser(userId, website){

    console.log(userId);
    website._user = userId;
    console.log(website._user);
    return Website.create(website)
      .then(function(responseWebsite){
        User.findUserById(userId)
          .then(function(user){
            user.websites.push(responseWebsite);
            console.log(user.websites);
            return user.save();
          });
        return responseWebsite;
      });
  // }
}

function findAllWebsitesForUser(userId) {
  return Website.find({ _user: userId });
}

function findWebsiteById(websiteId) {
  return Website.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return Website.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return Website.findByIdAndRemove(websiteId);
}
