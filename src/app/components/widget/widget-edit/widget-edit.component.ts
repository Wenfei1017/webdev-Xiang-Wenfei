import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import { WidgetService } from '../../../services/widget.service.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
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

  ngOnInit() {
    console.log('form widget-edit oninit');
    this.activatedRoute.params.subscribe((params: any) => {
      this.wgid = (params['widgetId']);

        this.widget = this.widgetService.dumpWidget();
        if (this.wgid === 'heading') {
          this.widget.widgetType = 'HEADING';
        } else if (this.wgid === 'image') {
          this.widget.widgetType = 'IMAGE';
        } else if (this.wgid === 'youtube') {
          this.widget.widgetType = 'YOUTUBE';
        } else if (this.wgid === 'text') {
          this.widget.widgetType = 'TEXT';
        } else if (this.wgid === 'html') {
          this.widget.widgetType = 'HTML';

          // update
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


}
