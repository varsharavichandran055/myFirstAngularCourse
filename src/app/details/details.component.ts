import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() myCompany:string | undefined;
  @Output() msg:EventEmitter<string>=new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  greet(){
    this.msg.emit('hi from details component');
  }

}
