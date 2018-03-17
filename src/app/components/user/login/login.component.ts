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

  login(username: String, password: String) {
    console.log('ddddhhhhh');
    this.userService.findUserByCredentials(username, password)
      .subscribe((user: User) => {
          this.errorFlag = false;
          console.log('username+  ' + this.username);
          this.router.navigate(['/user', user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        }
      );
  }

  ngOnInit() {
    console.log('ddddhhhhh');
    console.log(this.username);
     // this.errorMsg = 'This is Login Page';
     // this.errorFlag = false;
  }
}

