import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
  //   { '_id': '123', 'widgetType': 'HEADER', 'pageId': '321', 'size': '2', 'text': 'GIZMODO', 'url': undefined, 'width': undefined },
  //   { '_id': '234', 'widgetType': 'HEADER', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum', 'url': undefined, 'width': undefined },
  //   { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'size': undefined, 'text': undefined,
  //     'width': '100%', 'url': 'http://lorempixel.com/400/200/'},
  //   { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'size': undefined,
  //     'text': '<p>Lorem ipsum</p>', 'url': undefined, 'width': undefined},
  //   { '_id': '567', 'widgetType': 'HEADER', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum', 'url': undefined, 'width': undefined},
  //   { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'size': undefined,
  //     'text': undefined, 'url': 'https://youtu.be/AM2Ivdi9c4E', 'width': '100%'},
  //   { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'size': undefined,
  //     'text': '<p>Lorem ipsum</p>', 'url': undefined, 'width': undefined }
    { _id: '123', widgetType: 'HEADER', pageId: '321', size: '2', text: 'GIZMODO', url: '', width: '' },
    { _id: '234', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Lorem ipsum', url: '', width: '' },
    { _id: '345', widgetType: 'IMAGE', pageId: '321', size: '', text: '',
      width: '100%', url: 'http://lorempixel.com/400/200/'},
    { _id: '456', widgetType: 'HTML', pageId: '321', size: '',
      text: '<p>Lorem ipsum</p>', url: '', width: ''},
    { _id: '567', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Lorem ipsum', url: '', width: ''},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: '',
      text: '', url: 'https://youtu.be/AM2Ivdi9c4E', width: '100%'},
    { _id: '789', widgetType: 'HTML', pageId: '321', size: '',
      text: '<p>Lorem ipsum</p>', url: '', width: '' }
  ];

  createWidget(pageId: String, widget: any) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
  }
  findWidgetsById(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }
  // fidWidgetByPageId(pageId) {
  //   return this.widgets.find(function (page) {
  //     return page._id === pageId;
  //   });
  // }
  findWidgetsByPageId(pageId: String) {
    const resultSet: Widget[] = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        resultSet.push(this.widgets[x]);
      }
    }
    return resultSet;
  }
  updateWidget(widgetId: String, widget: any) {
    for (let i = 0; i < this.widgets.length; i++) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId: String) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
