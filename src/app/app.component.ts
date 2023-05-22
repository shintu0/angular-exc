import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputVal:string="";

  getTemplateVar(el:HTMLElement){
    console.log(el);
  }

}
