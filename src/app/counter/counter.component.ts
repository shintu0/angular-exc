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

  public color:string='GREEN';


  inc(){
    this.counter++;
  }
  dec(){
    this.counter--;
  }
}
