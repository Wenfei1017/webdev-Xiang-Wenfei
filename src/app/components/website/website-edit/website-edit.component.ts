import { Component, Inject, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  wid: String;
  websites: any[];
  webDeveloperId: String;
  description: String;
  updatedWebsite: any = {};
  errorFlag: boolean;
  errorMsg: '';

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  updateWebsite(website) {
    this.errorFlag = false;
         this.errorMsg = '';
         if (website.name == null || website.name.trim() === '') {
            this.errorFlag = true;
            this.errorMsg += 'Website Name cannot be empty';
            return;
         }
          if (!this.errorFlag) {
            this.websiteService.updateWebsite(this.wid, website).subscribe(
              (website: any) => {
                this.updatedWebsite = website;
                let url: any = '/user/' + this.webDeveloperId + '/website';
                this.router.navigate([url]);
              },
            );
            console.log(this.wid);
          }

  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.wid).subscribe(
      () => {
        let url: any = '/user/' + this.webDeveloperId + '/website';
        this.router.navigate([url]);
      },
    );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params['websiteId']).subscribe(
          (website: any) => {
            this.wid = website._id;
            this.webDeveloperId = website._user;
            this.updatedWebsite = website;
          },
          (error: any) => {
            this.errorMsg = error;
          }
        );
        this.websiteService.findWebsitesByUser(params['userId']).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          },
          (error: any) => {
            this.errorMsg = error;
          }
        );
      }
    );
  }

}
