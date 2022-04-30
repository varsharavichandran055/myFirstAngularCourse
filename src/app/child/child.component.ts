import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends ParentComponent implements OnInit {
constructor(http:HttpClient){
  super(http);
  console.log('child:constructor');
}

override ngOnInit(): void {
  console.log('child:ngOnInit');
  console.log(this.http);
}


}
