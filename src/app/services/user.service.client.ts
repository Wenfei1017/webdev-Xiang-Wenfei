import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, HttpModule, Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable ';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';



@Injectable()
export class UserService {

  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

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
