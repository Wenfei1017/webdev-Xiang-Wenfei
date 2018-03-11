import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget: Widget;
  wid: String;
  wgid: String;
  pid: String;
  uid: String;

  constructor(
    @Inject('WidgetService') private widgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  createWidget() {
    this.widget = this.widgetService.creatWidget(this.pid, this.widget);
  }
  updateWidget() {
    this.widget = this.widgetService.updateWidget(this.wgid, this.widget);
  }
  deleteWidget() {
    console.log('this is delete');
    this.widgetService.deleteWidget(this.wgid);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wgid = params['widgetId'];
        this.pid = params['pageId'];
        this.uid = params['userId'];
        this.wid = params['websiteId'];
      }
    );

    this.widget = this.widgetService.findWidgetsById(this.wgid);
  }

}
