import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class WebsiteService {

  websites: Website[] = [
  //   {'_id': '123', 'name': 'Facebook',    'developId': '456', 'description': 'Lorem' },
  //   {'_id': '234', 'name': 'Tweeter',     'developId': '456', 'description': 'Lorem' },
  //   {'_id': '456', 'name': 'Gizmodo',     'developId': '456', 'description': 'Lorem' },
  //   {'_id': '890', 'name': 'Go',          'developId': '123', 'description': 'Lorem' },
  //   {'_id': '567', 'name': 'Tic Tac Toe', 'developId': '123', 'description': 'Lorem' },
  //   {'_id': '678', 'name': 'Checkers',    'developId': '123', 'description': 'Lorem' },
  //   {'_id': '789', 'name': 'Chess',       'developId': '234', 'description': 'Lorem' }
    {_id: '123', name: 'Facebook',    developId: '456', description: 'Lorem' },
    {_id: '234', name: 'Tweeter',     developId: '456', description: 'Lorem' },
    {_id: '456', name: 'Gizmodo',     developId: '456', description: 'Lorem' },
    {_id: '890', name: 'Go',          developId: '123', description: 'Lorem' },
    {_id: '567', name: 'Tic Tac Toe', developId: '123', description: 'Lorem' },
    {_id: '678', name: 'Checkers',    developId: '123', description: 'Lorem' },
    {_id: '789', name: 'Chess',       developId: '234', description: 'Lorem' }
  ];

  createWebsite(userId: String, website: Website) {

    const new_website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developId: website.developId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsitesByUser(userId: String) {
    const resultSet = [];
    for ( const i in this.websites) {
      if (this.websites[i].developId === userId) {
        resultSet.push(this.websites[i]);
      }
    }
    return resultSet;
  }

  findWebsitesByUser2(userId: String) {
    return this.websites.filter(function (website) {
      return website.developId === userId;
    });
  }

  findWebsitesById(websiteId: String) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  updateWebsite(websiteId: String, website: Website) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
