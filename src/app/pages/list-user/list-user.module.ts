import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListUserComponent],
  exports: [
    ListUserComponent
  ]
})
export class ListUserModule { }
