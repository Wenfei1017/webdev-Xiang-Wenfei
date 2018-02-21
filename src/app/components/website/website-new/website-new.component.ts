import { Component, Inject, OnInit } from '@angular/core';
// import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  website: Website;
  websites: Website[] = [];

  constructor(@Inject('WebsiteService') private websiteService, private activatedRoute: ActivatedRoute) {}
  websiteNew() {
    this.website = this.websiteService.createWebsite(this.website._id, this.website);
  }
  ngOnInit() {
  }

}
