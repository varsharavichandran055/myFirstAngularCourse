import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(protected http:HttpClient) {
    console.log('parent:constructor');
  }

  ngOnInit(): void {
    console.log('parent:ngOnInit');
  }

}
