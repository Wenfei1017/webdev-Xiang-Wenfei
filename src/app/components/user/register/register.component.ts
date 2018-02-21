
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../../models/user.model.client';
// import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  user: User = {_id: '', username: '', password: '', firstName: '', lastName: ''};
  username: String;
  password: String;
  verifypas: string;
  InfoFlag: Boolean;
  infoMSG: String = 'wrong password';
  uid: String;

  constructor(@Inject('UserService') private userService,
              private router: Router, private activatedRoute: ActivatedRoute) {}
  // register() {
  //   console.log('username= ' + this.user.username);
  //   console.log('password= ' + this.user.password);
  //   this.userName = this.registerForm.value.username;
  //   this.InfoFlag = false;
  //   this.uid = Math.random() + '';
  //   this.user._id = this.uid;
  //   if (this.user.password === this.verifypas) {
  //     this.InfoFlag = false;
  //     this.userService.createUser(this.user);
  //     this.router.navigate(['/user', this.uid]);
  //   } else {
  //     this.InfoFlag = true;
  //   }
  // }

  register() {
    this.InfoFlag = false;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifypas = this.registerForm.value.verifyPassword;

    if (this.userService.findUserByUsername(this.username) != null) {
      this.infoMSG = 'This username is already exist.';
      this.InfoFlag = true;
    }
    if (this.password !== this.verifypas) {
      this.infoMSG = 'Password and Verify Password do not match.';
      this.InfoFlag = true;
    }
    if (!this.InfoFlag) {
      this.user.username = this.username;
      this.user.password = this.password;
      this.userService.createUser(this.user);
      this.router.navigate(['/user', this.userService.findUserByUsername(this.username)._id]);
    }
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['userId'];
    //     console.log(this.userId);
    //   }
    // );
  }

}
