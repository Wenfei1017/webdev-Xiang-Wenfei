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
  userId: String;
  username: String;
  infoFlag: boolean;
  infoMsg = 'update success !';
  constructor(
    @Inject('UserService') private userService,
    private activatedRoute: ActivatedRoute) { }

  updateUser(user) {
    console.log(user);
    this.user = this.userService.updateUser(user);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // alert('userId is' + this.userId);
      this.user = this.userService.findUserById(params['userId']);
    });
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }

}
