import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSwitch } from '@angular/common';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { Page } from '../../../models/page.model.client';
import { Website } from '../../../models/website.model.client';

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
  widget: Widget;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
  //   console.log('hahahahahahahahahahahah');
  //   this.activatedRoute.params.subscribe(
  //     params => {
  //       this.widgetService.findWidgetById(params['widgetId']).subscribe(
  //         (widget: Widget) => {
  //           if (widget.pageId === params['pageId']) {
  //             console.log(this.pid);
  //             this.pageService.findPageById(widget.pageId).subscribe(
  //               (page: Page) => {
  //                 if (page.websiteId === params['websiteId']) {
  //                   this.websiteService.findWebsiteById(page.websiteId).subscribe(
  //                     (website: Website) => {
  //                       if (website.developerId === params['userId']) {
  //                         this.uid = params['userId'];
  //                         this.wid = params['websiteId'];
  //                         this.pid = params['pageId'];
  //                         this.wgid = params['widgetId'];
  //                         this.widget = widget;
  //                         console.log(this.wgid);
  //                       } else {
  //                         console.log('User ID does not match.');
  //                       }
  //                     }
  //                   );
  //                 } else {
  //                   console.log('Website ID does not match.');
  //                 }
  //               }
  //             );
  //           }
  //         }
  //       );
  //     }
  //   );
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.wgid = (params['widgetId']);

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
          (widget: Widget) => {
            this.widget = widget;
            console.log(this.widget);
          }
        );
      }
    });
  }


}
