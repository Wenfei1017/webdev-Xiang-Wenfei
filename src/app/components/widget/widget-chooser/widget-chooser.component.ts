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
  widgets: any[];
  // newWidget: Widget = {
  //   _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
  //   height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
  // };

  constructor(
    private widgetService: WidgetService,
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params['pageId']).subscribe(
          (page: any) => {
            if (page._website === params['websiteId']) {
              this.websiteService.findWebsiteById(page._website).subscribe(
                (website: any) => {
                  if (website._user === params['userId']) {
                    this.uid = params['userId'];
                    this.wid = params['websiteId'];
                    this.pid = params['pageId'];
                    this.widgetService.findWidgetsByPageId(this.pid).subscribe(
                      (widgets: any[]) => {
                        this.widgets = widgets;
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


  createWidget(widgetType: String) {
    const newWidget: any = {
      type: widgetType, name: 'name', size: 1, width: '30%',
      height: '30%', rows: 0, deletable: false, formatted: false, placeholder: '',
      position: this.widgets.length
    }
    this.widgetService.createWidget(this.pid, newWidget).subscribe(
      (widget: any) => {
        const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + widget._id;
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
