import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  id:number=0;
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(){
    this.id=+(this.route.snapshot.paramMap.get("id") || 0);
    console.warn(this.route.snapshot.paramMap.get("id"));
  }

}
