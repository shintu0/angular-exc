import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exc';
  id=1;
  users:any;

  constructor(usersService:UsersService){
    usersService.getUsers().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }

  data:string="Some data string";

  dataToChild:string ="Parent value"

  updateParentData(data:any){
    console.warn(data);
    this.data=data;
  }

  getData(){
    return this.data;
  }
}
