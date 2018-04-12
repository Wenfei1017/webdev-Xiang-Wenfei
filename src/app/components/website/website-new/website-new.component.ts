import { Component, Inject, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  uid: String;
  websites: any[];
  newWebsite: any = {};
  errorFlag: boolean;
  errorMsg = '';


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.websiteService.findWebsitesByUser(this.uid).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          }
        );
      }
    );
  }

  createWebsite(website) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (website.name == null || website.name.trim() === '') {
      this.errorMsg = 'Website Name cannot be empty';
      this.errorFlag = true;
      return
    }
    if (!this.errorFlag) {
      this.websiteService.createWebsite(this.uid, website).subscribe(
        (website: any) => {
          const url: any = '/user/' + this.uid + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // Place an error message here
        }
      );
    }
  }

}
