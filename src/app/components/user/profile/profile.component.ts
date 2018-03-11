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
  // infoFlag: boolean;
  // infoMsg = 'update success !';

  constructor(
    @Inject('UserService') private userService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      alert('userId is' + this.uid);
    });
    this.user = this.userService.findUserById(this.uid);
    // alert(this.user.username);
    console.log(this.user.username);
  }

  updateUser(user) {
    console.log(this.user.username);
    console.log('testupdate');
    this.userService.updateUser(this.uid, user);
    this.user = user;
  }

}