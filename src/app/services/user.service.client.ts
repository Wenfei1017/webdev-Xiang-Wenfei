// ///<reference path="../../../node_modules/@angular/core/src/di/metadata.d.ts"/>
// import { User } from '../models/user.model.client';
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class UserService {
//   users: User[] = [
//     {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder'  },
//     {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley'  },
//     {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'  },
//     {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
//   ];
//   api = {
//     'createUser'   : this.createUser,
//     'findUserById' : this.findUserById
//   };
//
//
//   createUser(user: any) {
//     user._id = Math.random();
//     this.users.push(user);
//     return user;
//   }
//
//   findUserByCredential(username: String, password: String) {
//     return this.users.find( function (user) {
//       return user.username === username && user.password === password;
//     });
//   }
//
//   findUserById(userId: String) {
//     for (let x = 0; x < this.users.length; x++) {
//       if (this.users[x]._id === userId) {  return this.users[x]; }
//     }
//   }
//   findUserByUsername(username: string) {}
//
//   updateUser(userId: User) {
//     for (let i = 0; i < this.users.length; i++) {
//       if (this.users[i]._id === userId._id) {
//         this.users[i].firstName = userId.firstName;
//         this.users[i].lastName = userId.lastName;
//         return this.users[i];
//       }
//     }
//   }
//   deleteUser(userId) {}
// }
import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder'  },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley'  },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
  ];

  createUser(user: any) {
     user._id = Math.random();
     this.users.push(user);
     return user;
   }

  //  findUserByCredential(username: String, password: String) {
  //   return this.users.find( function (user) {
  //     return user.username === username && user.password === password;
  //   });
  // }

  findUserByCredentials(username: String, password: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username
        && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }

  // findUserByUsername(username) {
  //   return this.users.find(function (user) {
  //     return user.username === username;
  //   });
  // }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

//   updateUser(userId: String, user: any) {
//     for (let x = 0; x < this.users.length; x++) {
//       if (this.users[x]._id === userId) {
//         this.users[x].firstName = user.firstName;
//         this.users[x].lastName = user.lastName;
//       }
//     }
//   }
 }
