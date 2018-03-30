import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';
import { Page } from '../../../../models/page.model.client';
import { Website } from '../../../../models/website.model.client';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: any = {};
  baseUrl: String;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params.subscribe((params: any) => {
      this.wgid = params['widgetId'];
      this.pid = params['pageId'];
      this.wid = params['websiteId'];
      this.uid = params['userId'];
      // if (this.wgid === 'image') {
      //   this.widget = this.widgetService.dumpWidget();
      //   this.widget.widgetType = 'IMAGE';
      // } else {
        this.widgetService.findWidgetById(this.wgid).subscribe(
          (widget: any) => {
            this.widget = widget;
            console.log(this.widget);
          }
        );
      // }
    });
  }

  updateOrCreateWidget() {
    if (!this.widget._id) {
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
    this.widgetService.deleteWidget(this.wid).subscribe(
      (widget: any) => {
        const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget';
        this.router.navigate([url]);
      }
    );
  }
}
