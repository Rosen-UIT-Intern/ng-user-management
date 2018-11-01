import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ListUserModule } from './list-user/list-user.module';
import { TemplatesModule } from '../templates/templates.module';
import { CreateUserModule } from './create-user/create-user.module';
import { DetailUserModule } from './detail-user/detail-user.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ListUserModule,
    CreateUserModule,
    DetailUserModule,
    TemplatesModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
