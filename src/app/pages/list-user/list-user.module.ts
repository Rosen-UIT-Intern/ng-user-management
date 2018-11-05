import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListUserComponent, SearchBarComponent],
  exports: [
    ListUserComponent
  ]
})
export class ListUserModule { }
