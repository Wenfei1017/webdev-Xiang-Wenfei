import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { Page } from '../../../models/page.model.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widgets: Widget[];
  // widget: Widget;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pid = params['pageId'];
      this.uid = params['userId'];
      this.wid = params['websiteId'];
      this.widgetService.findWidgetsByPageId(this.pid).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
          console.log(this.widgets);
        }
      );
    });
  }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     params => {
  //       this.widgetService.findWidgetById(params['widgetId']).subscribe(
  //         (widget: Widget) => {
  //           if (widget.pageId === params['pageId']) {
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
  //                         console.log('widget-header widget id= ' + widget._id);
  //                       } else {
  //                         console.log('Two user id do not match.');
  //                       }
  //                     }
  //                   );
  //                 } else {
  //                   console.log('Two website id do not match.');
  //                 }
  //               }
  //             );
  //           }
  //         }
  //       );
  //     }
  //   );
  //   // console.log('widget header widget type = ' + this.widget.widgetType);
  //   // this.widget = this.widgetService.findWidgetById(this.widgetId);
  // }

  modifyURL(url) {
    const changeUrl = url.replace('youtu.be', 'youtube.com/embed');
    return this.sanitizer.bypassSecurityTrustResourceUrl(changeUrl);
  }

  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
      .subscribe(
        (data) => console.log(data)
      );
  }
}

