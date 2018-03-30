import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  // page: Page;
  pages: Page[] = [];
  uid: String;
  wid: String;

  constructor(private pageService: PageService,
              private userService: UserService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params['websiteId']).subscribe(
          (website: any) => {
            console.log('page list userid= ' + params['userId']);
            console.log('website user =' + website._user);
            if (website._user === params['userId']) {
              console.log('pagelist come here');
              this.wid = params['websiteId'];
              this.uid = params['userId'];
              this.pageService.findPageByWebsiteId(this.wid).subscribe(
                (pages: any[]) => {
                  this.pages = pages;
                  console.log('pages length' + pages.length);
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
