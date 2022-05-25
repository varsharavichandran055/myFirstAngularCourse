import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm:FormGroup;
  constructor() {
    this.userForm=new FormGroup(
      {
         Name: new FormControl(),
         Email:new FormControl()



      }
    )
  }

  ngOnInit(): void {
  }


  saveData(userForm:any){
    console.log(this.userForm.value);
  }


}
