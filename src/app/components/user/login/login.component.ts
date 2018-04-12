import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

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
  errorMsg = '';

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) {
  }

  login(username: String, password: String) {
    this.errorMsg = '';
    this.errorFlag = false;
    if (username == null || username.trim() === '') {
      this.errorMsg += 'Username cannot be empty';
      this.errorFlag = true;
    }
    if (password == null || password.trim() === '') {
      this.errorMsg += 'Password cannot be empty';
      this.errorFlag = true;
    }
    if (this.errorFlag) {
      return;
    }
    if (!this.errorFlag) {
      this.userService.login(this.username, this.password)
        .subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.errorFlag = false;
            // console.log('this is login page');
            // console.log(data);
            this.router.navigate(['/profile']);
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
  }
}

