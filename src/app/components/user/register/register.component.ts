
import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  user: User = {_id: '', username: '', password: '', firstName: '', lastName: ''};
  verifypas: string;
  InfoFlag: Boolean;
  infoMSG: String = 'wrong password';
  userId: String;

  constructor(@Inject('UserService') private userService,
              private router: Router, private activatedRoute: ActivatedRoute) {}
  register() {
    console.log('username= ' + this.user.username);
    console.log('password= ' + this.user.password);
    this.userId = Math.random() + '';
    this.user._id = this.userId;
    if (this.user.password === this.verifypas) {
      this.InfoFlag = false;
      // this.user = this.userService.createUser(this.user);
      // this.userId = this.userService.findUserById(this.user._id)._id;
      this.userService.createUser(this.user);
      this.router.navigate(['/profile', this.userId]);
    } else {
      this.InfoFlag = true;
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
