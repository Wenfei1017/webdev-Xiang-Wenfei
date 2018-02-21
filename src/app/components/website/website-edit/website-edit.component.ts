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
  websiteId: string;
  websites: Website[] = [];

  constructor(@Inject('WebsiteService') private websiteService, private activatedRoute: ActivatedRoute) {}

  updateWebsite() {
    this.website = this.websiteService.updateWebsite(this.website._id, this.website);
  }
  deleteWebsite() {
    this.website = this.websiteService.deleteWebsite(this.website._id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.websiteId = params['websiteId'];
    });
    this.website = this.websiteService.findWebsitesById(this.websiteId);
  }

}
