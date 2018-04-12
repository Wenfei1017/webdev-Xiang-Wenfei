import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  uid: String;
  pid: String;
  page: Page = { _id: '', name: '', websiteId: '', description: '', title: '' };
  // updatedPage: Page = { _id: '', name: '', websiteId: '', description: '' };
  name: String;
  pages: Page[] = [];
  wid: String;
  description: String;
  errorMsg = '';
  errorFlag: Boolean;

  constructor(private pageService: PageService,
              private userService: UserService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  // updatePage() {
  //   this.pageService .updatePage(this.page._id, this.page).subscribe(
  //     (page: Page) => {
  //       this.page = page;
  //       let url: any = '/user/' + this.uid + '/website/' + this.wid + '/page';
  //       this.router.navigate([url]);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  // 用这个方法捕捉不到pageId，返回的时候找不到原页面

  updatePage() {
    this.errorFlag = true;
    this.errorMsg = '';
    if (this.page.name == null ||  this.page.name.trim() === '') {
      this.errorFlag = true;
      this.errorMsg += 'page name can not be empty';
    }
    if (this.page.title == null || this.page.title.trim() === '') {
      this.errorFlag = true;
      this.errorMsg += 'Page Title cannot be empty';
    }
    if (this.errorFlag) {
      return;
    }
    this.pageService.updatePage(this.page._id, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.page);
      }
    );
  }

  deletePage() {
    console.log(this.page._id);
    this.pageService.deletePage(this.page._id).subscribe(
      () => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     (params: any) => {
  //       this.uid = params['userId'];
  //       this.pid = params['pageId'];
  //       // this.wid = params['websiteId'];
  //       // this.pid = params['pid'];
  //     }
  //   );
  //   this.page = this.pageService.findPageById(this.pid);
  //   console.log(this.page);
  // }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageService.findPageById(params['pageId']).subscribe(
        (page: Page) => {
          this.page = page;
          console.log(page._id);
        }
      );
    });
  }

  }
