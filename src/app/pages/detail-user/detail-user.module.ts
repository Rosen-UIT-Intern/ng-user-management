import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './detail-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailUserComponent],
  exports: [
    DetailUserComponent
  ]
})
export class DetailUserModule { }
