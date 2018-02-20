import { Component, Inject, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http';
// import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-login',
  // providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(@Inject('UserService') private userService, private router: Router) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    const user: User = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      // this.router.navigate(['/profile/user._id']);
      console.log('login id= ' + user._id);
      this.router.navigate(['/profile', user._id]);
    } else {
      alert('Please type correct password!');
      this.errorFlag = true;
    }
  }

  ngOnInit() {
     this.errorMsg = 'This is Login Page';
     this.errorFlag = false;
  }
  buttonClicked(event: any) {
    console.log(event); // your custom code on button click
  }
}

