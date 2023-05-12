import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [
    UserListComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentListComponent,
    UserListComponent
  ]
})
export class ListingModule { }
