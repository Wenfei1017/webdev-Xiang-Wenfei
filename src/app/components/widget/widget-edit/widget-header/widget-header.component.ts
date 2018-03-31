import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';
import { Page } from '../../../../models/page.model.client';
import { Website } from '../../../../models/website.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget: any = {};
  wid: String;
  wgid: String;
  pid: String;
  uid: String;

  constructor(private widgetService: WidgetService,
              private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  updateOrCreateWidget() {
    console.log('create widget = ' + this.widget._id);
    if (!this.widget._id) {
      console.log('widget header pid = ' + this.pid);
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: any) => {
          this.widget = widget;
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          console.log(this.widget);
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        () => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (widget: any) => {
        const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    console.log('from 63');
    this.activatedRoute.params.subscribe(
      params => {
        console.log('from 66');
        this.widgetService.findWidgetById(params.widgetId).subscribe(
          (widget: any) => {
            console.log('from 69');
            if (widget._page === params.pageId) {
              console.log('from 71');
              this.pageService.findPageById(widget._page).subscribe(
                (page: any) => {
                  console.log('from 74');
                  if (page._website === params.websiteId) {
                    console.log('from 76');
                    this.websiteService.findWebsiteById(page._website).subscribe(
                      (website: any) => {
                        if (website._user === params.userId) {
                          console.log('from 80');
                          this.uid = params.userId;
                          this.wid = params.websiteId;
                          this.pid = params.pageId;
                          this.wgid = params.widgetId;
                          this.widget = widget;
                          console.log('uid = ' + this.uid);
                          console.log('wid = ' + this.wid);
                          console.log('pid = ' + this.pid);
                          console.log('wgid = ' + this.wgid);
                          console.log('widget header = ' + this.widget.widgetType);
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
}
