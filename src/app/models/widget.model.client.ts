export class Widget {
  name: String;
  _id: String;
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;
  width: String;
  url: String;
  formatted: boolean;

  constructor(name: String, _id: String, widgetType: String,
              pageId: String, size: Number = 1, text: String = 'text', width: String = '100%',
              url: String = 'url', formatted: boolean = false) {
    this.name = name;
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.text = text;
    this.formatted = formatted;
  }
}
