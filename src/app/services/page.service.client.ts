import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';


@Injectable()
export class PageService {

  pages: Page[] = [
    {_id: '321', name: 'Post 1', websiteId: '890', description: 'Lorem'},
    {_id: '432', name: 'Post 2', websiteId: '567', description: 'Lorem'},
    {_id: '543', name: 'Post 3', websiteId: '678', description: 'Lorem'},
    // { '_id': '3', 'name': 'Post 1', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '4', 'name': 'Post 2', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '5', 'name': 'Post 3', 'websiteId': '4', 'description': 'Lorem' },
    // { '_id': '1', 'name': 'Post 4', 'websiteId': '3', 'description': 'Lorem' },
    // { '_id': '2', 'name': 'Post 5', 'websiteId': '2', 'description': 'Lorem' }

  ];

  // createPge(pageId: String, page: Page) {
  //
  //   const new_page = {
  //     _id: (new Date()).getTime() + '',
  //     name: page.name,
  //     websiteId: page.websiteId,
  //     description: page.description
  //   };
  //
  //   this.pages.push(new_page);
  // }

  createPage(websiteId: String, page: Page) {
    const createdPage = new Page(String(this.pages.length + 1), page.name, websiteId, page.description);
    this.pages.push(createdPage);
    // alert(createdPage.name);
    return this.copyPage(createdPage);
  }

  copyPage(page: Page) {
    if (!page) {
      return undefined;
    }
    return new Page(page._id, page.name, page.websiteId, page.description);
  }

  // findPageByWebsiteId(websiteId: String) {
  //   const resultSet = [];
  //   for (const i in this.pages.length) {
  //     if (this.pages[i].websiteId === websiteId) {
  //       resultSet.push(this.pages[i]);
  //     }
  //   }
  //   return resultSet;
  // }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        resultSet.push(this.pages[x]);
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

  update(page: Page) {
    this.pages.push(page);
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

