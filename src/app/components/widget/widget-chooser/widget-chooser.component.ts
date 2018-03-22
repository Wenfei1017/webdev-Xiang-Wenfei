import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { Website } from '../../../models/website.model.client';


@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  widgets: Widget[] = [];
  newWidget: Widget = {
    _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
    height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
  };

  constructor(
    private widgetService: WidgetService,
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((params: any) => {
  //     this.uid = params['userId'];
  //     this.wid = params['websiteId'];
  //     this.pid = params['pageId'];
  //   });
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params['pageId']).subscribe(
          (page: Page) => {
            if (page.websiteId === params['websiteId']) {
              this.websiteService.findWebsiteById(page.websiteId).subscribe(
                (website: Website) => {
                  if (website.developerId === params['userId']) {
                    // console.log('testetetettetetettetetetehahaha');
                    this.uid = params['userId'];
                    this.wid = params['websiteId'];
                    this.pid = params['pageId'];
                    console.log('pid = ' + this.pid);
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

  createWidget(widgetType: String) {
    this.newWidget.widgetType = widgetType;
    this.widgetService.createWidget(this.pid, this.newWidget).subscribe(
      (widget: Widget) => {
        this.newWidget = widget;
        console.log('widget chooser widget type = ' + widget.widgetType);
        console.log('widget chooser widget id = ' + widget._id );
        const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + this.newWidget._id;
        console.log('widget chooser url = ' + url);
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}

// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-widget-chooser',
//   templateUrl: './widget-chooser.component.html',
//   styleUrls: ['./widget-chooser.component.css']
// })
// export class WidgetChooserComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
