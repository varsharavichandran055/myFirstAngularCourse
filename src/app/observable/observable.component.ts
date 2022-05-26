import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  numbers:number[]=[];
  error:string | undefined ;
  complete:string | undefined ;
  constructor() { }


  init(){
   // Observable type 1 - new observable
    // const observable=new Observable(observer=>{
    //   observer.next(2);
    //   observer.next(4);
    //   observer.next(6);

    //   observer.error('raised error');
    //   observer.complete();
    // });

    //Observable type 2- of
   const observable=Observable.of(7,8,5);

    const observer={
      next:(data: number)=>this.numbers.push(data),
      error:(err: string)=>this.error=err,
      complete:()=>this.complete='completed',

    };
    observable.subscribe(observer);

  }


}
