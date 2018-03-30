import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';

@Injectable()
export class WidgetService {

  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  dumpWidget() {
    return new Widget(undefined, undefined, undefined, undefined);
  }

  findImage(imageName: String) {
    const url = this.baseUrl + '/api/image/' + imageName;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  createWidget(pageId: String, widget: Widget) {
    console.log('client side create widget');
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    console.log('create widget url= ' + url);
    return this.http.post(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWidgetsByPageId(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWidgetById(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    // console.log('from widget server client ts');
    console.log('client side find widget by id');
    console.log('find widget by id url = ' + url);
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateWidget(widgetId: String, widget: Widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteWidget(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
    return this.http.put(url, '').map(
      (res: Response) => {
        const data = res;
        return data;
      }
    );
  }
}
