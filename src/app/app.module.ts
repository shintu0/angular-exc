import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListingModule } from './listing/listing.module';
import { ChildComponent } from './child/child.component';
// import { UserListComponent } from './listing/user-list/user-list.component';
// import { StudentListComponent } from './listing/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChildComponent,
    // UserListComponent,
    // StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
