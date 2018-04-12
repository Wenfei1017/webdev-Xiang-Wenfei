
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  user: any =   {};
  username: String;
  password: String;
  verifypas: String;
  errorFlag: Boolean;
  errorMsg: String = '';
  // users: User[] = [];
  // uid: String;

  constructor(private userService: UserService,
              private router: Router, private activatedRoute: ActivatedRoute) {}

  register(username: String, password: String, verifyPassword: String) {
    this.errorFlag = false;
    if (username.trim() === '') {
      this.errorMsg += 'Username cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (password.trim() === '') {
      this.errorMsg += 'Password cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (this.password !== this.verifypas) {
      this.errorMsg += 'Password and Verify Password do not match.';
      this.errorFlag = true;
    }
    if (this.errorFlag) {
      return;
    }
    if (!this.errorFlag) {
      this.userService.register(this.username, this.password)
        .subscribe(
          (data: any) => {
            this.errorFlag = false;
            this.router.navigate(['/profile']);
          },
          (error: any) => {
            this.errorMsg = error.body;
          }
        );
    }
  }

  ngOnInit() {
  }

}
