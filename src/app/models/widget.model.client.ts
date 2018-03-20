// export class Widget {
//   name: String;
//   _id: String;
//   widgetType: String;
//   pageId: String;
//   size: Number;
//   text: String;
//   width: String;
//   url: String;
//   formatted: boolean;
//   placeholder: String;
//
//   constructor(name: String, _id: String, widgetType: String,
//               pageId: String, size: Number = 1, text: String = 'text', width: String = '100%',
//               url: String = 'url', formatted: boolean = false, placeholder: '') {
//     this.name = name;
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.pageId = pageId;
//     this.size = size;
//     this.url = url;
//     this.width = width;
//     this.text = text;
//     this.formatted = formatted;
//     this.placeholder = placeholder;
//   }
// }

export class Widget {
  _id: String;
  widgetType: String;
  name: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  height: Number;
  rows: Number;
  class: String;
  icon: String;
  deletable: Boolean;
  formatted: Boolean;
  placeholder: String;

  constructor(_id, type, name = '', pageId, size = '1', text = '', width = '100%', url = '') {
    this._id = _id;
    this.widgetType = type;
    this.name = name;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.height = 0;
    this.rows = 0;
    this.class = '';
    this.icon = '';
    this.deletable = false;
    this.formatted = false;
    this.placeholder = '';
  }
}
