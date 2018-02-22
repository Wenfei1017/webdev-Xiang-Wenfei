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
  widget: Widget = {_id: '', widgetType: '', pageId: '', size: '', text: '', url: 'i am url', width: ''};

  constructor(
    @Inject('WidgetService') private widgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.wgid = params['widgetId'];
        this.pid = params['pageId'];
        this.uid = params['userId'];
        this.wid = params['websiteId'];
      }
    );
    console.log('url= ' + this.widget.url);

    this.widget = this.widgetService.findWidgetsById(this.wgid);
  }

  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(widget._id, widget);
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid);
  }
}
