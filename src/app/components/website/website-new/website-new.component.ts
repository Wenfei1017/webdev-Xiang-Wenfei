import { Component, Inject, OnInit } from '@angular/core';
// import {WebsiteService} from '../../../services/website.service.client';
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


  constructor(@Inject('WebsiteService') private websiteService,  private activatedRoute: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['userId'];
      }
    );
    console.log('website new test');
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
  }

  createWebsite(newWebsite) {
    if (newWebsite.name !== '') {
      newWebsite.developerId = this.uid;
      this.websiteService.createWebsite(this.uid, newWebsite);
      // let url: any = '/user/' + this.uid + '/website';
      const url: String = '/user/' + this.uid + '/website';
      this.router.navigate([url]);
    }
  }
}
