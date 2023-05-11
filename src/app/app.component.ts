import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exc';
  id=1;

  data:string="Some data string";

  getData(){
    return this.data;
  }
}
