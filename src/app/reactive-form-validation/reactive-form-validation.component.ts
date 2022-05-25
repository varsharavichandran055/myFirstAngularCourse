import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  userForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.userForm=this.fb.group({
      Name:['',Validators.required],
      Username:['',[Validators.required,Validators.minLength(4)]],
      Email:['',[Validators.required,Validators.email]],
      Contact:['',[Validators.pattern('^[789\\d{9}$]')]]
    })

   }

  ngOnInit(): void {
  }

  saveData(userForm:any){
    console.log(this.userForm.value);
  }

}
