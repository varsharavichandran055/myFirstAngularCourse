import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit, DoCheck,AfterViewInit,AfterViewChecked {
  company:string
  constructor() {
    this.company="this is example for nested components";
   }

  ngOnInit(): void {
    console.log('Master:ngOnInit');
  }
  ngDoCheck(): void {
    console.log('Master:NgDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('Master:ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Master:ngAfterViewChecked');
  }

  Receive(data:string){
  alert(data);
  }

}
