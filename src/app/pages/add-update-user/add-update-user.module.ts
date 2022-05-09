import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateUserComponent } from '../../pages/add-update-user/add-update-user.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateUserComponent
  }
];

@NgModule({
  declarations: [AddUpdateUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class AddUpdateUserModule { }
