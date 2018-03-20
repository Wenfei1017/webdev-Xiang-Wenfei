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
  widget: Widget = {
    _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
    height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
  };
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

  ngOnInit() {
    console.log('from 63');
    this.activatedRoute.params.subscribe(
      params => {
        console.log('from 66');
        this.widgetService.findWidgetById(params.widgetId).subscribe(
          (widget: Widget) => {
            console.log('from 69');
            if (widget.pageId === params.pageId) {
              console.log('from 71');
              this.pageService.findPageById(widget.pageId).subscribe(
                (page: Page) => {
                  console.log('from 74');
                  if (page.websiteId === params.websiteId) {
                    console.log('from 76');
                    this.websiteService.findWebsiteById(page.websiteId).subscribe(
                      (website: Website) => {
                        if (website.developerId === params.userId) {
                          console.log('from 80');
                          this.uid = params.userId;
                          this.wid = params.websiteId;
                          this.pid = params.pageId;
                          this.wgid = params.wdgetId;
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


// import { Component, Inject, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Widget } from '../../../../models/widget.model.client';
// import { WidgetService } from '../../../../services/widget.service.client';
//
// @Component({
//   selector: 'app-widget-header',
//   templateUrl: './widget-header.component.html',
//   styleUrls: ['./widget-header.component.css']
// })
// export class WidgetHeaderComponent implements OnInit {
//
//   widget: Widget;
//   wgid: String;
//   pid: String;
//
//   constructor(
//     private widgetService: WidgetService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router
//   ) { }
//
//   updateOrCreateWidget() {
//     if (!this.widget._id) {
//       this.widgetService.createWidget(this.pid, this.widget).subscribe(
//         (widget: Widget) => {
//           this.widget = widget;
//           this.router.navigate(['../'], {relativeTo: this.activatedRoute});
//           console.log(this.widget);
//         }
//       );
//     } else {
//       this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
//         () => {
//           this.router.navigate(['../'], {relativeTo: this.activatedRoute});
//         }
//       );
//     }
//   }
//
//   deleteWidget() {
//     this.widgetService.deleteWidget(this.widget._id).subscribe(
//       () => {
//         this.router.navigate(['../'], {relativeTo: this.activatedRoute});
//       }
//     );
//   }
//
//   ngOnInit() {
//     this.activatedRoute.params.subscribe(
//       params => {
//         this.widgetService.findWidgetById(params.wgid).subscribe(
//           (widget: Widget) => {
//             if (widget.pageId === params.pid) {
//               this.pageService.findPageById(widget.pageId).subscribe(
//                 (page: Page) => {
//                   if (page.websiteId === params.wid) {
//                     this.websiteService.findWebsiteById(page.websiteId).subscribe(
//                       (website: Website) => {
//                         if (website.developerId === params.uid) {
//                           this.userId = params.uid;
//                           this.websiteId = params.wid;
//                           this.pageId = params.pid;
//                           this.widgetId = params.wgid;
//                           this.widget = widget;
//                         } else {
//                           console.log("User ID does not match.");
//                         }
//                       }
//                     );
//                   } else {
//                     console.log("Website ID does not match.");
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     );
//   }
//
// }
