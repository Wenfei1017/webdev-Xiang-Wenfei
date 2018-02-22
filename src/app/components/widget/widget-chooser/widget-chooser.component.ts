import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  widgets: Widget[] = [];
  // newWidget: Widget = {_id: '', widgetType: '', pageId: '', size: '1', text: 'text', url: 'url', width: 'width'};

  constructor(@Inject('WidgetService') private widgetService,  private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      this.wid = params['websiteId'];
      this.pid = params['pageId'];
    });
  }

  createWidget(widgetType: String) {
    const newWidget: Widget = {
      _id: '', widgetType: widgetType, pageId: '', size: '1', text: 'text', url: 'url', width: '100%'
    }
    // console.log('this is widget chooser');
    this.widgetService.createWidget(this.pid, newWidget);
    const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + newWidget._id;
    console.log('url = ' + url);
    this.router.navigate([url]);
  }

}
