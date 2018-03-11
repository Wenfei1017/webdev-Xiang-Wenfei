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
  // wid: String;
  wgid: String;
  widget: Widget;

  constructor(@Inject('WidgetService') private widgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.widget = this.widgetService.emptyWidget();
      this.wgid = (params['widgetId']);
      if (this.wgid === 'heading') {
        this.widget.widgetType = 'HEADING';
      } else if (this.wgid === 'image') {
        this.widget.widgetType = 'IMAGE';
      } else if (this.wgid === 'youtube') {
        this.widget.widgetType = 'YOUTUBE';
      } else {
        this.widget = this.widgetService.findWidgetsById(this.wgid);
      }
      console.log(this.widget);
    });
  }
}
