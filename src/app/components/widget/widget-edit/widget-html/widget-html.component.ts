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
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  // properties
  widget: Widget = {
    _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
    height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
  };
  pid: String;
  uid: String;
  wgid: String;
  wid: String;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

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
      this.wgid = params['widgetId'];
      this.pid = params['pageId'];
      this.uid = params['userId'];
      if (this.wgid === 'html') {
        this.widget = this.widgetService.dumpWidget();
        this.widget.widgetType = 'HTML';
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

    updateOrCreateWidget() {
    if (!this.widget._id) {
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
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
    this.widgetService.deleteWidget(this.widget._id).subscribe(
      () => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }
}
