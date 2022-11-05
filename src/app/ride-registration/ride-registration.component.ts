import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-ride-registration',
  templateUrl: './ride-registration.component.html',
  styleUrls: ['./ride-registration.component.css']
})

export class RideRegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted!:boolean;
  bcolor:string="white";
  constructor(private formbuilder:FormBuilder,
    private registerService:RegisterService,
    private route:Router,
    private userLog:RestService) { }
  user!:string;
  ngOnInit(){
    this.registerForm=this.formbuilder.group({
      startLocation:['',Validators.required],
      destination:['',Validators.required],
      car:[],
      seatsAvailable:[0,this.checkSeats],
      Offerid:['',Validators.required]
    });
    this.user=this.userLog.getUser();
  }
  add(){
    this.registerService.addRide({
      offerId:this.registerForm.controls['Offerid'].value,
      name:this.user,
      car:this.registerForm.controls['car'].value,
      seatsLeft:this.registerForm.controls['seatsAvailable'].value,
      pickUp:this.registerForm.controls['startLocation'].value,
      destination:this.registerForm.controls['destination'].value
    }).subscribe({
      next:()=>this.submitted=true
    });
  }

  goBack(){
    this.submitted=false;
    this.route.navigate(['/bookride']);
  }

  checkSeats(n:FormControl):any
  {
    
    if(n.value<0 || n.value>8)
    {
      return {
        invalidSeats:{
          message:"seats must be between 0 and 8!"
      }
    }
    }
  }
}
