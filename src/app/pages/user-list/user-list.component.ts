import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'work', 'email', 'address', 'city', 'enable', 'actions'];
  users: User[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.users = [...this.userService.users];
  }

  deleteUserData(id: any) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
