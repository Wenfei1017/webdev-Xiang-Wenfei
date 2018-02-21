import { Component, Inject, OnInit } from '@angular/core';
// import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: Widget[] = [];
  urls = [];
  i = 0;

  constructor(@Inject('WidgetService') private widgetService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.widgets = this.widgetService.findWidgetsByPageId(params['pageId']);
    });
  }
}
