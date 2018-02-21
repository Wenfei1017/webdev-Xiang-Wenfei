import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  uid: String;
  pid: String;
  wid: String;
  wgid: String;
  widget: Widget;

  constructor(
    @Inject(WidgetService) private widgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wgid = params['wgid'];
        this.pid = params['pageId'];
        this.uid = params['userId'];
        this.wid = params['websiteId'];
      }
    );
    this.widget = this.widgetService.findWidgetById(this.wgid);
  }

  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(widget._id, widget);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid);
  }
}
