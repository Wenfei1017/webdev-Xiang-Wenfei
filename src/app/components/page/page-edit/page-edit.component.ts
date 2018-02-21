import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Page} from '../../../models/page.model.client';
// import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: Page;
  pages: Page[] = [];

  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute) { }
  updatePage() {
    this.page = this.pageService.updatePage(this.page._id, this.page);
  }
  deletePage() {
    this.pageService.deletePage(this.page._id);
  }
  ngOnInit() {
  }

}
