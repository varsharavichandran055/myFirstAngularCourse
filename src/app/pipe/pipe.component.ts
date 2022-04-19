import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  employees:any[];
  constructor() {
    this.employees=[
      {name:'Hema',address:'Tamil Nadu',salary:12000,joining:new Date()},
      {name:'Revathi',address:'Kerala',salary:13000,joining:new Date()},
      {name:'John',address:'Andra',salary:15000,joining:new Date()}
    ]
  }

  ngOnInit(): void {
  }

}
