import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, HttpModule, RequestOptions, Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable ';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()
export class UserService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username: username,
      password: password
    };
    console.log('this url= ' + this.baseUrl + '/api/login');
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password
    };

    return this.http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findUserByCredentials(username: String, password: String) {
    console.log('client side find user by cre');
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    console.log('url =' + url);
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findUserById(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

  findUserByUsername(username: String) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateUser(userId: String, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((res: Response) => {
      return res.json();
    });
  }

  deleteUser(userId: String) {
    console.log('client side delete user');
    const url = this.baseUrl + '/api/user/' + userId;
    console.log('delete user url= ' + url);
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
