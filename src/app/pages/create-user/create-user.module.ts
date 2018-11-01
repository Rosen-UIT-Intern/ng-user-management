import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateUserComponent],
  exports: [
    CreateUserComponent
  ]
})
export class CreateUserModule { }
