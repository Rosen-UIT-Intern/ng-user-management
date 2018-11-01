import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'list-user',
    component: ListUserComponent,
  }, {
    path: 'create-user',
    component: CreateUserComponent,
  }, {
    path: 'detail-user',
    component: DetailUserComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
