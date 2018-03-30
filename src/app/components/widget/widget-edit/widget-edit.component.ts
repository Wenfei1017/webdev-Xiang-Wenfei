import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgSwitch} from '@angular/common';

import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {PageService} from '../../../services/page.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: any = {};

  constructor(private widgetService: WidgetService,
              private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.wgid = (params['widgetId']);
      this.pid = params['pageId'];
      this.uid = params['userId'];
      this.wid = params['websiteId'];

      console.log('widget edit wgid = ' + this.wgid);
      console.log('widget edit pid = ' + this.pid);
      console.log('widget edit uid = ' + this.uid);
      console.log('widget edit wid = ' + this.wid);

      // new
      this.widget = this.widgetService.dumpWidget();
      if (this.wgid === 'heading') {
        this.widget.widgetType = 'HEADING';
      } else if (this.wgid === 'image') {
        this.widget.widgetType = 'IMAGE';
      } else if (this.wgid === 'youtube') {
        this.widget.widgetType = 'YOUTUBE';
      } else if (this.wgid === 'text') {
        this.widget.widgetType = 'TEXT';
      } else if (this.wgid === 'html') {
        this.widget.widgetType = 'HTML';

        // update
      } else {
        this.widgetService.findWidgetById(this.wgid).subscribe(
          (widget: any) => {
            this.widget = widget;
            console.log(this.widget);
          }
        );
      }
    });
  }


}
