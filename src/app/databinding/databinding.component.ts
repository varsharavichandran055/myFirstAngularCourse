import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  name:string;
  company:string;
  url:string;

  constructor() {
    this.name='Varsha';
    this.company='Google';
    this.url='https://www.google.com/';
  }

  Greet(){
    alert('Welcome '+ this.name);  //string cancatenation
  }

  SampleGreet(){
    alert(`welcome ${this.name}`); // without string concatenation
  }

  ngOnInit(): void {
  }

}
