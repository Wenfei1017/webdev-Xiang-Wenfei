var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var Page = mongoose.model('Page', PageSchema); // create model and call it page, connect to pageschema
var Website = require('../website/website.model.server');

Page.createPage = createPage;
Page.findAllPagesForWebsite = findAllPagesForWebsite;
Page.findPageById = findPageById;
Page.updatePage = updatePage;
Page.deletePage = deletePage;

module.exports = Page;

function createPage(websiteId, page) {
  page._website= websiteId;
  return Page.create(page)
    .then(function(responsePage){
      Website.findWebsiteById(websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          return website.save();
        });
      return responsePage;
    });
}

function findAllPagesForWebsite(websiteId) {
  return Page.find({ _website: websiteId });
}

function findPageById(pageId) {
  return Page.findById(pageId);
}

function updatePage(pageId, page) {
  return Page.findByIdAndUpdate(pageId, page);
}

function deletePage(pageId) {
  return Page.findByIdAndRemove(pageId);
}
