import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit ,OnChanges{
  @Input() myCompany:string | undefined;
  @Output() msg:EventEmitter<string>=new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child:ngOnChanges');
  }

  greet(){
    this.msg.emit('hi from details component');
  }

}
