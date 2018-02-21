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
  username: String;
  infoFlag: boolean;
  infoMsg = 'update success !';

  constructor(
    @Inject('UserService') private userService,
    private activatedRoute: ActivatedRoute) { }

  updateUser() {
    console.log(this.user);
    // aaa
    this.user = this.userService.updateUser(this.user._id, this.user);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // alert('userId is' + this.userId);
      this.user = this.userService.findUserById(params['userId']);
      // alert(this.user._id);
    });
    // this.user = this.userService.findUserById(this.userId);
    // this.username = this.user['username'];
  }

}
