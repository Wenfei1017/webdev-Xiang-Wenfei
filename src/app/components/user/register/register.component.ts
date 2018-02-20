// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import { User } from '../../../models/user.model.client';
// import {UserService} from '../../../services/user.service.client';
// import {NgForm} from '@angular/forms';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   user: User;
//   password: string;
//   verifypas: string;
//   InfoFlag: Boolean;
//   infoMSG: String = 'wrong password';
//
//   constructor(private userService,
//               private router: Router) {
//   }
//   ngOnInit() {
//   }
// }

//
import { Component, Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../../models/user.model.client';
// import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  // providers: [UserService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  password: string;
  verifypas: string;
  InfoFlag: Boolean;
  infoMSG: String = 'wrong password';

  constructor(@Inject('UserService') private userService,
              private router: Router) {}
  register() {
    if (this.user.password === this.verifypas) {
      this.InfoFlag = false;
      this.user = this.userService.createUser(this.user);
      this.router.navigate(['/profile/:userId', this.user._id]);
    } else {
      this.InfoFlag = true;
    }
  }

  ngOnInit() {
  }

}
