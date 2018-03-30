import {Component, Inject, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  // website: Website;
  uid: String;
  // websites: Website[] = [];
  websites: any[];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.websites);
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.uid = (params['userId']);
          console.log('this.uid= ' + this.uid);
          return this.websiteService.findWebsitesByUser(this.uid).subscribe(
            (websites: Website[]) => {
              this.websites = websites;
              console.log(this.websites.length);
            });
        });
  }
}
