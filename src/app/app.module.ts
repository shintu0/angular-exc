import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListingModule } from './listing/listing.module';
import { CounterComponent } from './counter/counter.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormsModule } from '@angular/forms';
// import { UserListComponent } from './listing/user-list/user-list.component';
// import { StudentListComponent } from './listing/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CounterComponent,
    CapitalizePipe,
    // UserListComponent,
    // StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
