import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ListUserModule } from './list-user/list-user.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ListUserModule
  ],
  declarations: [PagesComponent],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
