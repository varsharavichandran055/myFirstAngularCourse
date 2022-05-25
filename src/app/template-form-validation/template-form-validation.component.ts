import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user';

@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {
  user:User;
  constructor() {
    this.user=new User();
   }

  ngOnInit(): void {
  }

  saveData(userForm:NgForm){
    if(userForm.valid){
      alert("Form is valid");
    }else{
      alert("Form is invalid");
    }
  }

}
