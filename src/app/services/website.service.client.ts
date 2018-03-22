import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {WEBSITES} from './website.mock';
import {Http, Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable ';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';


@Injectable()
export class WebsiteService {
  websites: Website[] = WEBSITES;

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  findAllWebSites() {
    return this.websites;
  }

  createWebsite(userId: String, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateWebsite(websiteId: String, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWebsiteById(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }

  deleteWebsite(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map((res: Response) => {
      return res;
    });
  }

  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
