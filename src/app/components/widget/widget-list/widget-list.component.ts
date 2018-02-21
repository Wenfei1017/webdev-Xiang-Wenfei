import { Component, Inject, OnInit } from '@angular/core';
// import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  widgets: Widget[] = [];
  urls = [];
  i = 0;

  constructor(@Inject('WidgetService') private widgetService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.wid = params['websiteId'];
        this.pid = params['pageId'];
      }
    );

    this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
    console.log(this.pid);
  }
  photoURL(url) {
    var embedUrl = url.replace("youtu.be", "youtube.com/embed");
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
