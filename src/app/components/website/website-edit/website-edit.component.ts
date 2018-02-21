import { Component, Inject, OnInit } from '@angular/core';
// import {WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  website: Website;
  wid: String;
  // uid: String;
  websites: any[] = [{ _id: '', name: '', developerId: '', description: '' }];
  updatedWebsite: Website;
  webDeveloperId: String;
  description: String;

  constructor(@Inject('WebsiteService') private websiteService, private activatedRoute: ActivatedRoute) {}

  updateWebsite() {
    this.website = this.websiteService.updateWebsite(this.updatedWebsite._id, this.updatedWebsite);
  }
  deleteWebsite() {
    this.website = this.websiteService.deleteWebsite(this.website._id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.wid = (params['websiteId']);
      this.webDeveloperId = (params['userId']);
      // this.uid = (params['userId']);
    });
    this.websites = this.websiteService.findWebsitesByUser(this.webDeveloperId);
    this.updatedWebsite = this.websiteService.findWebsiteById(this.wid);
  }

}
