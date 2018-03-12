import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  // providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // user: User = { _id: '', username: '', password: '', firstName: '', lastName: '' };
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  errorFlag: boolean;
  users: User[] = [];
  // userService = new UserService();
  errorMsg = 'Invalid username or password !';

  constructor(
    @Inject('UserService') private userService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    const user: User = this.userService.findUserByCredentials(this.username, this.password);
    console.log('whytest');
    // console.log(user.username);

    if (user) {
      // console.log('whytest');
      // this.router.navigate(['/profile/user._id']);
      console.log('login id= ' + user._id);
      this.router.navigate(['/user', user._id]);
    } else {
      console.log('Please type correct password!');
      console.log('whytest');
      // console.log(this.username);
      // console.log(this.password);
      this.errorFlag = true;
    }
  }

  ngOnInit() {
    console.log(this.users);
     // this.errorMsg = 'This is Login Page';
     // this.errorFlag = false;
  }
  // buttonClicked(event: any) {
  //   console.log(event); // your custom code on button click
  // }
}

