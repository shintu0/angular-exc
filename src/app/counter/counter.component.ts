import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter:number=0;

  public disabled: boolean=true;

  public condition: boolean=true;

  public color:string='RED';

  public users:{name:string,email:string}[]=[
    {name:"Sintu",email:"sintu@domain.com"},
    {name:"Anjali",email:"anjali@domain.com"},
    {name:"Bryan",email:"bryan@domain.com"},
    {name:"Bruce",email:"bruce@domain.com"}
  ]


  inc(){
    this.counter++;
  }
  dec(){
    this.counter--;
  }
}
