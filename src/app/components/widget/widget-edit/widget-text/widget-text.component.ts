import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';
import { Page } from '../../../../models/page.model.client';
import { Website } from '../../../../models/website.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  // properties
  widget: Widget;
  uid: String;
  wid: String;
  pid: String;
  wgid: String;

  constructor(private widgetService: WidgetService,
              private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.widgetService.findWidgetById(params['widgetId']).subscribe(
          (widget: Widget) => {
            if (widget.pageId === params['pageId']) {
              this.pageService.findPageById(widget.pageId).subscribe(
                (page: Page) => {
                  if (page.websiteId === params['websiteId']) {
                    this.websiteService.findWebsiteById(page.websiteId).subscribe(
                      (website: Website) => {
                        if (website.developerId === params['userId']) {
                          this.uid = params['userId'];
                          this.wid = params['websiteId'];
                          this.pid = params['pageId'];
                          this.wgid = params['widgetId'];
                          this.widget = widget;
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
          }
        );
      }
    );
  }

  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(this.wgid, widget).subscribe(
      (widget: Widget) => {
        let url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      () => {
        let url: any = "/user/" + this.uid + "/website/" + this.wid + "/page/" + this.pid + "/widget";
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
