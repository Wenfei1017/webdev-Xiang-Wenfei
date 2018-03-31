var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var Widget = mongoose.model('Widget', WidgetSchema);
var Page = require('../page/page.model.server');
var Website = require('../website/website.model.server');

Widget.createWidget = createWidget;
Widget.findAllWidgetsForPage = findAllWidgetsForPage;
Widget.findWidgetById = findWidgetById;
Widget.updateWidget = updateWidget;
Widget.deleteWidget = deleteWidget;
Widget.reorderWidgets = reorderWidgets;
Widget.resetWidgets = resetWidgets;

module.exports = Widget;

function createWidget(pageId, widget)  {
  widget._page = pageId;
  return Widget.create(widget)
    .then(function(responseWidget){
      Page.findPageById(responseWidget._page)
        .then(function(page){
          page.widgets.push(responseWidget);
          return page.save();
        });
      return responseWidget;
    });
}

function findAllWidgetsForPage(pageId) {
  return Widget.find({ _page: pageId });
}

function findWidgetById(widgetId) {
  return Widget.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return Widget.findByIdAndUpdate(widgetId, widget);
}

// function deleteWidget(widgetId) {
//   console.log("widgetId: " + widgetId);
//   Widget.findById(widgetId, function (err, foundWidget) {
//     var index = foundWidget.position;
//     resetWidgets(index, foundWidget._page);
//   });
//   return Widget.findByIdAndRemove(widgetId);
// }

function deleteWidget(widgetId) {
  Widget.findById(widgetId)
    .then(function(widget) {
      Page.findPageById(widget._page)
        .then(function(page) {
          page.widgets.pull({_id: widgetId});
          page.save();
        })
    });
  return Widget.remove({_id: widgetId});
}

function resetWidgets(index, pageId) {
  Widget.find({ _page: pageId }, function (err, widgets) {
    widgets.forEach(function (widget) {
      if (widget.position > index) {
        widget.position--;
        widget.save();
      }
    })
  })
}

function reorderWidgets(pageId, start, end) {
  return Widget.find({ _page: pageId }, function (err, widgets) {
    widgets.forEach(function (widget) {
      if (start < end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position > start
          && widget.position <= end) {
          widget.position--;
          widget.save();
        } else {
          if (widget.position === start) {
            widget.position = end;
            widget.save();
          } else if (widget.position < start
            && widget.position >= end) {
            widget.position++;
            widget.save();
          }
        }
      }

      if (start > end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position < start
          && widget.position >= end) {
          widget.position++;
          widget.save();
        } else {
          if (widget.position === start) {
            widget.position = end;
            widget.save();
          } else if (widget.position > start
            && widget.position <= end) {
            widget.position--;
            widget.save();
          }
        }
      }
    })
  })
}
