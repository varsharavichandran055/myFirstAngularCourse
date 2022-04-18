import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css'],
  styles:[
 `.redcss{
   color:red;
 }`
  ]
})
export class DirComponent implements OnInit {
  num:number;
  alphabet:string;
  colors:string[];
  color:string;

  constructor() {
    this.num=4;
    this.alphabet='a';
    this.colors=['red','blue','green'];
    this.color='';
  }

  ngOnInit(): void {
  }

}
