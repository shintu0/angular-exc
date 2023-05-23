import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListingModule } from './listing/listing.module';
import { CounterComponent } from './counter/counter.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './directives/red-el.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AmoutMeComponent } from './about/amout-me/amout-me.component';
// import { UserListComponent } from './listing/user-list/user-list.component';
// import { StudentListComponent } from './listing/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CounterComponent,
    CapitalizePipe,
    RedElDirective,
    HomeComponent,
    AboutComponent,
    UserComponent,
    NotFoundComponent,
    AmoutMeComponent,
    // UserListComponent,
    // StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
