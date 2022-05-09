import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateUserModule } from './pages/add-update-user/add-update-user.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/add-update-user/add-update-user.module').then((m) => AddUpdateUserModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/add-update-user/add-update-user.module').then((m) => AddUpdateUserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
