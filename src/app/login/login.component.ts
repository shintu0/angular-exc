import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(){
    alert("Login Called");
  }

  getUser(name){
    alert(`Hello ${name}`);
  }

}
