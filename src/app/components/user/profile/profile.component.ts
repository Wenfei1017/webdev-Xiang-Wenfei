import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  uid: String;
  username: String;
  errorFlag: boolean;
  errorMsg = 'update success !';

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

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
    this.userService.deleteUser(this.user._id).subscribe(
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

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  ngOnInit() {
    console.log('user id= ' + this.sharedService.user._id);
    if (this.sharedService.user === '') {
      const url: any = '/login';
      this.router.navigate([url]);
    } else {
      this.user = this.sharedService.user;
    }
  }
}
