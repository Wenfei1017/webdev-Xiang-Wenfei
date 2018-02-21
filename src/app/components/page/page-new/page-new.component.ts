import {Component, Inject, OnInit} from '@angular/core';
// import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  uid: String;
  page: Page;
  wid: String;
  pages: Page[] = [];
  newPage: Page = {_id: '', name: '', websiteId: '', description: ''};
  pageName: String;

  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  createPage(websiteId: String, page: Page) {
    const createdPage = new Page(String(this.pages.length + 1), page.name, websiteId, page.description);
    this.pages.push(createdPage);
    return this.copyPage(createdPage);
  }

  copyPage(page: Page) {
    if (!page) {
      return undefined;
    }
    return new Page(page._id, page.name, page.websiteId, page.description);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      this.wid = params['websiteId'];
    });
  }
  createNewPage(page: Page) {
    if (page.name !== '' && page.description !== '') {
      this.pageService.createPage(this.wid, page);
      // alert(page.name);
      const url: any = '/user/' + this.uid + '/website/' + this.wid + '/page';
      this.router.navigate([url]);
    }
  }
}
