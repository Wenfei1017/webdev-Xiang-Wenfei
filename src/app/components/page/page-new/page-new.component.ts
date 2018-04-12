import {Component, Inject, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {Website} from '../../../models/website.model.client';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  errorMsg = '';
  errorFlag: boolean;
  uid: String;
  page: Page;
  wid: String;
  pages: Page[] = [];
  newPage: any = {};
  pageName: String;

  constructor(private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // createPage(websiteId: String, page: Page) {
  //   const createdPage = new Page(String(this.pages.length + 1), page.name, websiteId, page.description);
  //   this.pages.push(createdPage);
  //   return this.copyPage(createdPage);
  // }

  copyPage(page: Page) {
    if (!page) {
      return undefined;
    }
    return new Page(page._id, page.name, page.websiteId, page.description, page.title);
  }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((params: any) => {
  //     this.uid = params['userId'];
  //     this.wid = params['websiteId'];
  //   });
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params['websiteId']).subscribe(
          (website: any) => {
            if (website._user === params['userId']) {
              this.wid = params['websiteId'];
              this.uid = params['userId'];
            } else {
              console.log('User ID does not match.');
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    );
  }

  createPage(page: Page) {
    this.errorMsg = '';
    this.errorFlag = false;
    if (page.name == null || page.name.trim() === '') {
      this.errorFlag = true;
      this.errorMsg += 'Page Name cannot be empty';
    }
    if (page.title == null || page.title.trim() === '') {
      this.errorFlag = true;
      this.errorMsg += 'Page Title cannot be empty';
    }
    if (this.errorFlag) {
      return;
    }
    console.log('page new create method');
    console.log('page name= ' + page.name);
    this.pageService.createPage(this.wid, page).subscribe(
      (page: any) => {
        let url: any = '/user/' + this.uid + '/website/' + this.wid + '/page';
        this.router.navigate([url]);
      }
    );
  }
}
