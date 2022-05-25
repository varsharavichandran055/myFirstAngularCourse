import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  name:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  saveData(myForm:NgForm){
    console.log(this.name);
  }

}
