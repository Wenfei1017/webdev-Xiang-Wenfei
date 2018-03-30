import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { WidgetService } from '../../../services/widget.service.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  widgets = [{}];
  widget = {};

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params.pageId).subscribe(
          (page: any) => {
            if (page._website === params.websiteId) {
              this.websiteService.findWebsiteById(page._website).subscribe(
                (website: any) => {
                  if (website._user === params.userId) {
                    this.uid = params.userId;
                    this.wid = params.websiteId;
                    this.pid = params.pageId;
                    this.widgetService.findWidgetsByPageId(this.pid).subscribe(
                      (widgets: any[]) => {
                        this.widgets = widgets;
                      },
                      (error: any) => {
                        console.log(error);
                      }
                    );
                  } else {
                    console.log('User ID does not match.');
                  }
                }
              );
            } else {
              console.log('Website ID does not match.');
            }
          }
        );
      }
    );
  }

  photoURL(url) {
    const changeUrl =  url.replace('youtu.be', 'youtube.com/embed');
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

