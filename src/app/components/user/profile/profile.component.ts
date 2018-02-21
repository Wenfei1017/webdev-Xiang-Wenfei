import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  // providers: [UserService],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  uid: String;
  infoFlag: boolean;
  infoMsg = 'update success !';

  constructor(
    @Inject('UserService') private userService,
    private activatedRoute: ActivatedRoute) { }

  updateUser(user) {
    console.log(this.user);
    console.log('test');
    this.user = this.userService.updateUser(this.uid, user);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      // alert('userId is' + this.userId);
      this.uid = params['userId'];
    });
    this.user = this.userService.findUserById(this.uid);

    // this.username = this.user['username'];
  }

}
