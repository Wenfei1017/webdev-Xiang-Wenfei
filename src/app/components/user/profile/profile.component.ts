import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  uid: String;
  errorFlag: boolean;
  errorMsg = 'update success !';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: any) => {
        this.errorFlag = false;
        this.user = user;
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error;
      }
    );
  }

  deleteUser() {
    this.userService.deleteUser(this.uid).subscribe(
      (user: any) => {
        const url: any = '/login';
        this.router.navigate([url]);
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error;
      }
    );
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['userId'];
      return this.userService.findUserById(this.uid).subscribe(
        (user: any) => {
          this.user = user;
        },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error.toString();
      }
      );
    });
    console.log(this.user);
  }

}
