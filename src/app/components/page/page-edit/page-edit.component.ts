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
  page: Page;
  // updatedPage: Page = { _id: '', name: '', websiteId: '', description: '' };
  // name: String;
  pages: Page[] = [];
  // wid: String;
  // description: String;

  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }
  updatePage() {
    this.page = this.pageService .updatePage(this.page._id, this.page);
    console.log(this.pages);
  }
  deletePage() {
    this.pageService.deletePage(this.page._id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.pid = params['pageId'];
        // this.wid = params['websiteId'];
        // this.pid = params['pid'];
      }
    );
    this.page = this.pageService.findPageById(this.pid);
    console.log(this.page);
  }

}
