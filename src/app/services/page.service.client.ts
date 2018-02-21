import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';


@Injectable()
export class PageService {

  pages: Page[] = [
    {_id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem'},
    {_id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem'},
    {_id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem'},
    // { '_id': '3', 'name': 'Post 1', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '4', 'name': 'Post 2', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '5', 'name': 'Post 3', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '1', 'name': 'Post 4', 'websiteId': '3', 'description': 'Lorem' },
    // { '_id': '2', 'name': 'Post 5', 'websiteId': '2', 'description': 'Lorem' }

  ];

  createPge(pageId: String, page: Page) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      description: page.description
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for (const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].description = page.description;
      }
    }
  }

  deletePage(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}

