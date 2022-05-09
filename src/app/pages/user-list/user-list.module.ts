import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component'
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})

export class UserListModule { }


