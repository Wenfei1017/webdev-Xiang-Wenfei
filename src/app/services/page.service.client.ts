import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {Http, HttpModule, Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable ';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';

@Injectable()
export class PageService {

  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

  dumpPage() {
    return new Page(undefined, undefined, undefined, undefined);
  }

  createPage(websiteId: String, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageByWebsiteId(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageById(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updatePage(pageId: String, page: Page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deletePage(pageId: String) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId);
  }
}
