import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

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

  constructor(private pageService: PageService,
              private userService: UserService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    console.log('pagelisttesttttttt');
    this.activatedRoute.params.subscribe(
      params => {
        // this.wid = params['websiteId'];
        // this.uid = params['userId'];
        this.websiteService.findWebsiteById(params['websiteId']).subscribe(
          (website: Website) => {
            console.log('pagelisttesttttttt');
            if (website.developerId === params['userId']) {
              this.wid = params['websiteId'];
              this.uid = params['userId'];
              console.log('wid=' + this.wid);
              console.log('uid=' + this.uid);
              this.pageService.findPageByWebsiteId(this.wid).subscribe(
                (pages: Page[]) => {
                  this.pages = pages;
                },
                (error: any) => {
                  console.log(error);
                }
              );
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
}
