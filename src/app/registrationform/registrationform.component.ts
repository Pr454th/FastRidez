import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  registerForm!:FormGroup;
  submitted!:boolean;
  bcolor:string="white";
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      firstname:['hello',{updateOn:'blur',validators:[Validators.required]}],
      lastname:['world',Validators.required],
      email:['',[Validators.required,this.validateEmail]],
      address:this.formBuilder.group({
        street:[],
        zip:[],
        city:[]
      })
    });
  }
  validateEmail(c: FormControl): any {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      emailInvalid: {
        message: "Invalid Format!"
      }
    };
  }

}
