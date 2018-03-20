import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  // users: User[] = [];
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  // login() {
  //   console.log('ddddhhhhh');
  //   this.username = this.loginForm.value.username;
  //   this.password = this.loginForm.value.password;
  //
  //   this.userService.findUserByCredentials(this.username, this.password)
  //     .subscribe((user: User) => {
  //         this.errorFlag = false;
  //         console.log('username+  ' + this.username);
  //         this.router.navigate(['/user', user._id]);
  //       },
  //       (error: any) => {
  //         this.errorFlag = true;
  //         this.errorMsg = error;
  //       }
  //     );
  // }

  login(username: String, password: String) {
    // if (username.trim() === '') {
    //   this.errorMsg = 'Username cannot be empty';
    //   this.errorFlag = true;
    // }
    // if (password.trim() === '') {
    //   this.errorMsg = 'Password cannot be empty';
    //   this.errorFlag = true;
    // }
    // this.username = this.loginForm.value.username;
    // this.password = this.loginForm.value.password;
    // console.log(this.username);
    // console.log(this.password);
    alert(this.username);
    if (!this.errorFlag) {
      console.log(this.username);
      console.log(this.password);
      this.userService.findUserByCredentials(this.username, this.password)
        .subscribe(
          (user: User) => {
            console.log('message1');
            // this.errorFlag = false;
            console.log(user);

            this.router.navigate(['/user', user._id]);
          },
          (error: any) => {
            this.errorFlag = true;
            // this.errorMsg = 'Invalid username or password !';
            this.errorMsg = error;
            console.log('this is error message = ' + this.errorMsg);
          }
        );
    }
  }

  ngOnInit() {
    this.errorFlag = false;
     // this.errorMsg = 'This is Login Page';
     // this.errorFlag = false;
  }
}

