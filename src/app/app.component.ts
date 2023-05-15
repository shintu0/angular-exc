import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exc';
  id=1;



  data:string="Some data string";

  getUserData(event:any):void{
    console.log("Get User Data called with val: "+event.target.value);
  }

  getData():string{
    return this.data;
  }

  onKeyUp(val:string){
    console.warn(val);
  }
  onKeyDown(val:string){
    console.warn(val);
  }
}
