import { Component, Inject, OnInit } from '@angular/core';
// import {WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  website: Website;
  wid: String;
  // uid: String;
  // websites: any[] = [{ _id: '', name: '', developerId: '', description: '' }];
  websites: Website[] = [];
  // updatedWebsite: Website;
  // webDeveloperId: String;
  // description: String;

  constructor(@Inject('WebsiteService') private websiteService, private activatedRoute: ActivatedRoute, private router: Router) {}
  updateWebsite() {
    this.website = this.websiteService.updateWebsite(this.website._id, this.website);
    console.log(this.website);
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website._id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.wid = (params['websiteId']);
      // this.website = this.websiteService.findWebsiteById(params['websiteId']);
      this.websites = this.websiteService.findWebsitesByUser(params['userId']);
    });
    // this.websites = this.websiteService.findWebsitesByUser(this.webDeveloperId);
    this.website = this.websiteService.findWebsiteById(this.wid);
    console.log(this.website);
  }

}
