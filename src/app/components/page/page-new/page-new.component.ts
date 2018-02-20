import {Component, Inject, OnInit} from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  page: Page;
  pages: Page[] = [];
  constructor(@Inject('PageService') private pageService,
              private activatedRoute: ActivatedRoute) { }

  createPage() {
    this.page = this.pageService.createPage(this.page._id, this.page);
  }
  ngOnInit() {
  }

}
