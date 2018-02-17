// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) {}

  /*login(username: String, password: String) {
    //alert('username: ' + username);
   // if (username === 'alice' && password == "qqq") {
      const user: User = this.userService.findUserByCredential(username, password);
      if (user) {
        this.router.navigate(['/profile', user._id ]);
      }
   // }
  }*/

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    alert(this.username);

    const user: User = this.userService.findUserByCredential(this.username, this.password);
    if (user) {
      // this.router.navigate(['/profile/user._id']);
      this.router.navigate(['/profile', user._id]);
    }
  }

  ngOnInit() {
    // this.title = 'This is Login Page';
    // this.disabledFlag = true;
  }
  buttonClicked(event: any) {
    console.log(event); // your custom code on button click
  }
}
// <h1>{{title}}</h1>
//
// <button [disabled]="disabledFlag">Submit</button>
//
// <button (click)="buttonClicked($event)">Submit</button>
//
//   <input type="text" [(ngModel)]="inputTxt">
//
//   {{inputTxt}}
