import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../login/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(
    private formbuilder:FormBuilder,
    private userService:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(){
    this.signupForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      password:['',Validators.required]
    });
  }
  add(){
    this.userService.newUser({
      username:this.signupForm.controls['name'].value,
      email:this.signupForm.controls['email'].value,
      password:this.signupForm.controls['password'].value
  }).subscribe({
    next:()=>this.router.navigate(['/login']),
    error:(err)=>{
      alert("username already exists try a different one");
    }
  });
  }
  // validatePass(x:any,y:any):any{
  //   console.log(x,y);
    
  //   if(x!=y)
  //   {
  //     return {
  //       notSame:{
  //         message:"*password and confirm passwords must be same"
  //       }
  //     }
  //   }
  // }

}
