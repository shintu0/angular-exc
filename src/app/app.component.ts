import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:string="Hello";

  loginRForm=new FormGroup({
    user:new FormControl("",Validators.required),password:new FormControl("",Validators.required)
  })

  onUserLogin(){
    console.warn(this.loginRForm.value);
  }

  get user(){
    return this.loginRForm.get("user");
  }

  get password(){
    return this.loginRForm.get("password");
  }

  onLogin(item:any){
    console.log(item)

  }

}
