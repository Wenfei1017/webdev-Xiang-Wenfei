import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  uid: String;
  pid: String;
  wid: String;
  wgid: String;
  widget: Widget;

  constructor(@Inject('WidgetService') private widgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userID'];
        this.wid = params['websiteId'];
        this.pid = params['pageId'];
        this.wgid = params['widgetId'];
      }
    );

    this.widget = this.widgetService.findWidgetsById(this.wgid);
    console.log('type= ' + this.widget.widgetType);
  }
}
