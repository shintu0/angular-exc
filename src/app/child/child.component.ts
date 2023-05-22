import { Component,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Output() updateParentDataEvent=new EventEmitter<string>();

@Input( ) dataFromParent:string="Value in Child";


}
