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

  updateParentData(data:any){
    console.warn(data);
    this.data=data;
  }

  getData(){
    return this.data;
  }
}
