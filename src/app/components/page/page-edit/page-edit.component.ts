import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Page} from '../../../models/page.model.client';
// import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  uid: String;
  pid: String;
  // page: Page;
  updatedPage: Page = { _id: '', name: '', websiteId: '', description: '' };
  name: String;
  pages: Page[] = [];
  wid: String;
  description: String;

  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }
  updatePage(page) {
    this.pageService .updatePage(page._id, page);
  }
  deletePage() {
    this.pageService.deletePage(this.pid);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.pid = params['pageId'];
        this.wid = params['websiteId'];
      }
    );
    this.updatedPage = this.pageService.findPageById(this.pid);
  }

}
