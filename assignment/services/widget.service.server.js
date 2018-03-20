module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname + '/../../src/assets/uploads' });

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget",reorderWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var widgets = [
    // { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO', 'url': undefined, 'width': undefined, 'formatted': false },
    // { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'url': undefined, 'width': undefined, 'formatted': false },
    // { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
    //   'url': 'http://lorempixel.com/400/200/', 'size': undefined, 'text': 'it is a image', 'formatted': false },
    // { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>HTML1 <b>HELLO</b></p>',
    //   'url': undefined, 'width': undefined, 'size': undefined, 'formatted': false },
    // { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'url': undefined, 'width': undefined, 'formatted': false },
    // { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
    //   'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E', 'size': undefined, 'text': undefined, 'formatted': false },
    // { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>I am a <i>HTML</i>, haha :)</p>',
    //   'url': undefined, 'width': undefined, 'size': undefined, 'formatted': false },
    // { '_id': '8', 'widgetType': 'TEXT', 'pageId': '3', 'text': 'Some Text',
    //   'url': undefined, 'width': undefined, 'size': undefined, 'formatted': true }
    { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "234", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "567", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "789", widgetType: "HTML", name: 'html name', pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' }
  ];

  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    if(myFile == null) {
      // res.redirect("http://localhost:4200/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
      res.redirect("https://cs5610-webdev-junruxu.herokuapp.com/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
      return;
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    if (!widgetId) {
      var tobeCreated = {_id: (widgets.length + 1).toString(), widgetType: 'IMAGE', pageId: pageId, size: size, text: 'text', width:'100%',
        url:'/uploads/' + filename, formatted: false};
      widgets.push(tobeCreated);
    } else {
      var foundWidget = widgets.find(function (widget) {
        return widget._id === widgetId;
      });
      foundWidget.url = "/uploads/" + filename;
    }

    // res.redirect("http://localhost:4200/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
    res.redirect("https://cs5610-webdev-junruxu.herokuapp.com/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
  }

  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);

    // found the index in widgets array
    var startIndexDb = 0;
    var endIndexDb = 0;
    var count = 0;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        if (startIndex === count) {
          startIndexDb = i;
        }
        if (endIndex === count) {
          endIndexDb = i;
        }
        count++;
      }
    }

    var changedWidget = widgets[startIndex];
    widgets.splice(startIndexDb, 1);
    widgets.splice(endIndexDb, 0, changedWidget);
    res.json(widgets);
  }

  function createWidget(req, res) {
    console.log('server side create widget');
    var createdWidget = req.body;
    var pageId = req.params["pageId"];
    createdWidget._id = (widgets.length + 1).toString();
    createdWidget.pageId = pageId;
    widgets.push(createdWidget);
    res.json(createdWidget);
  }

  function findAllWidgetsForPage(req, res) {
    var resultSet = [];
    var pageId = req.params["pageId"];
    for(var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        resultSet.push(widgets[i]);
      }
    }
    res.json(resultSet);
  }

  function findWidgetById(req, res){
    console.log('find widgetbyId from server side');
    var widgetId = req.params["widgetId"];
    console.log('serve side' + widgetId);
    var foundWidget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    if (foundWidget){
      res.json(foundWidget);
    } else {
      res.status(401).send('widget not found');
    }
  }

  function updateWidget(req, res) {
    var widgetId = req.params["widgetId"];
    var foundWidget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    var widget = req.body;
    foundWidget.widgetType = widget.widgetType;
    foundWidget.size = widget.size;
    foundWidget.text = widget.text;
    foundWidget.width = widget.width;
    foundWidget.url = widget.url;
    foundWidget.formatted = widget.formatted;
    res.json(foundWidget);
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["widgetId"];
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        const j = +i;
        widgets.splice(j, 1);
      }
    }
    res.send("success");
  }
};
