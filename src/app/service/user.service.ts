import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  configUrl = '../../assets/data/users.json';
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  setUserData() {
    this.getUserData().subscribe((response: any) => {
      this.users = response.users;
    })
  }

  getUserData() {
    return this.http.get<User[]>(this.configUrl);
  }

  getUserById(id: number) {
    return this.users.find(u => u.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
  }


  updateUser(id: number, data: User) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        user = data;
        user.id = id;
      }
      return user
    })
  }
}
