export class Page {
  _id: String;
  name: String;
  websiteId: String;
  description: String;
  title: String;

  constructor(_id, name, websiteId, description, title) {
    this._id = _id;
    this.name = name;
    this.websiteId = websiteId;
    this.description = description;
    this.title = title;
  }
}

