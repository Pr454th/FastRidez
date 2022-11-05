import { AnimateTimings } from '@angular/animations';
import { Login } from './login';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle:string="Login";
  // twoWayBindtest:string="two way binding check";
  colorName="red";
  
  isAuthenticated!:boolean;//!->to avoid initialization errors
  submitted=false;
  username!:string;
  password!:string;
  // users:Login[]=[
  //   {username:"admin",password:"admin"},
  //   {username:"prasath",password:"1"},
  //   {username:"pradesh",password:"2"},
  // ];

  constructor(private formBuilder:FormBuilder,
    private userService:UserServiceService,
    private router:Router,
    private userLog:RestService) { }
  
  users!:any[];
  inVpassword!:string;
  noUser:boolean=true;

  clear(){
    this.username="";
    this.password="";
  }

  authen!:any;

  userCheck(authen:any){

    this.submitted=true;
    if(this.authen.auth)
    {
          this.isAuthenticated=true;
          alert("Welcome "+this.username);
          this.userLog.setUser(this.username);
          this.router.navigate(['/bookride']);
          this.password="";
    }
    else{
      this.inVpassword="Invalid Credentials";
    }
    this.username="";
    this.password="";
    if(!this.isAuthenticated){
      alert("Invalid! Username or Password")
    }
  }

  onSubmit()
  {
    console.log("login");
    this.userService.isUser({username:this.loginForm.controls['uname'].value,password:this.loginForm.controls['pcode'].value}).subscribe({
      next:(data)=>{
        this.authen=data
        console.log(this.authen);
        this.userCheck(this.authen);
      }
    });
    // for(let i=0;i<this.users.length;i++)
    // {
    //   if(this.username===this.users[i].username)
    //   {
    //     this.noUser=false;
    //     if(this.password===this.users[i].password)
    //     {
    //       this.isAuthenticated=true;
    //       alert("Welcome "+this.username);
    //       this.userLog.setUser(this.username);
    //       this.router.navigate(['/bookride']);
    //       this.password="";
    //     }
    //     else{
    //       this.inVpassword="Invalid Credentials";
    //     }
    //     this.username="";
    //   }
    // }
    // if(this.noUser==true)
    // {
    //   this.inVpassword="Invalid Credentials";
    // }
  }

  loginForm!:FormGroup;
  err!:string;

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      uname:['',Validators.required],
      pcode:['',Validators.required]
    });
    this.userService.getUsers().subscribe({
      next:(data)=>this.users=data,
      error:(err)=>this.err=err
    })
  }

}
