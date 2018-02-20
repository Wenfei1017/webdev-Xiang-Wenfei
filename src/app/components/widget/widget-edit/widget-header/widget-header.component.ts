import { Component, Inject, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget: Widget;
  widgetId: String;
  pageId: String;

  constructor(
    @Inject('WidgetService') private widgetService,
    private activatedRoute: ActivatedRoute
  ) { }
  createWidget() {
    this.widget = this.widgetService.creatWidget(this.pageId, this.widget);
  }
  updateWidget() {
    this.widget = this.widgetService.updateWidget(this.pageId, this.widget);
  }
  deleteWidget() {
    this.widgetService.deletWidget(this.widget._id);
  }

  ngOnInit() {
  }

}
