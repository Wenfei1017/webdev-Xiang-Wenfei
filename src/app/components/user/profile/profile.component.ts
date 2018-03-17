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
  user: User = { _id: '', username: '', password: '', firstName: '', lastName: '' };
  uid: String;
  errorFlag: boolean;
  errorMsg = 'update success !';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute, private route: Router) { }

  updateUser(updatedUser) {
    this.userService.updateUser(this.uid, updatedUser).subscribe(
      (user: User) => {
        this.errorFlag = false;
        this.user = user;
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error;
      }
    );
  }

  // deleteUser() {
  //   this.userService.deleteUser(this.uid).subscribe(
  //     (user: User) => {
  //       const url: any = '/login';
  //       this.route.navigate([url]);
  //     },
  //     (error: any) => {
  //       this.errorFlag = true;
  //       this.errorMsg = error;
  //     }
  //   );
  // }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe();
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['userId'];
      return this.userService.findUserById(params['userId']).subscribe(
        (user: User) => {
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
