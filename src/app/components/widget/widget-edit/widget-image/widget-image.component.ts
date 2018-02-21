import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: Widget;

  constructor(
    @Inject('WidgetService') private widgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wgid = params['wedgetId'];
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
