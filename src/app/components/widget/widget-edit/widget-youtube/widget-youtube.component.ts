import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';
import { Page } from '../../../../models/page.model.client';
import { Website } from '../../../../models/website.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  uid: String;
  pid: String;
  wid: String;
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
  //                         console.log(this.widget);
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
      if (this.wgid === 'youtube') {
        this.widget = this.widgetService.dumpWidget();
        this.widget.widgetType = 'YOUTUBE';
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

  // updateWidget(widget: Widget) {
  //   this.widgetService.updateWidget(widget._id, widget);
  // }

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
