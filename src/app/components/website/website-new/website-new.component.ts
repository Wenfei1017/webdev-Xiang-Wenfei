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
  websites: any[] = [{ _id: '', name: '', developerId: '', description: '' }];
  newWebsite: Website = { _id: '', name: '', developerId: '', description: '' };


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}
  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     (params: any) => {
  //       this.uid = params['userId'];
  //     }
  //   );
  //   console.log('website new test');
  //   this.websites = this.websiteService.findWebsitesByUser(this.uid);
  // }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
        this.websiteService.findWebsitesByUser(this.uid).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
        );
      }
    );
  }

  createWebsite(website) {
    this.websiteService.createWebsite(this.uid, website).subscribe(
      (website: Website) => {
        this.newWebsite = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.newWebsite);
      }
    );
  }
}
