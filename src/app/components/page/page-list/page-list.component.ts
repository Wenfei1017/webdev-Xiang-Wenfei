import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  // page: Page;
  pages: any = [];
  uid: String;
  wid: String;

  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.wid = params['websiteId'];
      }
    );
    this.pages = this.pageService.findPageByWebsiteId(this.wid);
    console.log('pages= ' + this.pages);
    console.log('websiteId= ' + this.wid);
    console.log('page= ' + this.pages[0]);
  }
}
