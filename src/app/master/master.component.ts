import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  company:string
  constructor() {
    this.company="this is example for nested components";
   }

  ngOnInit(): void {
  }

  Receive(data:string){
  alert(data);
  }

}
