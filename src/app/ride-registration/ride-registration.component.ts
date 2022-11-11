import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RideServiceService } from '../book-ride/ride-service.service';
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
  updated:boolean=false;
  bcolor:string="white";
  title:string="New Ride Registration";
  prog:number=50;
  foo(){
    this.prog+=20;
  }
  constructor(private formbuilder:FormBuilder,
    private registerService:RegisterService,
    private route:Router,
    private userLog:RestService,
    private rideService:RideServiceService) { }
  user!:string;
  toUpdateRide!:any;
  ngOnInit(){
    this.toUpdateRide=this.rideService.getUpdateRide();
    if(this.toUpdateRide){
      this.registerForm=this.formbuilder.group({
        startLocation:[this.toUpdateRide.pickUp,Validators.required],
        destination:[this.toUpdateRide.destination,Validators.required],
        car:[this.toUpdateRide.car],
        seatsAvailable:[this.toUpdateRide.seatsLeft,this.checkSeats],
        Offerid:[this.toUpdateRide.offerId,Validators.required]
      });
      this.title="Update Ride";
      this.rideService.unsetUpdateRide();
    }
    else{
      this.title="New Ride Registration";
      this.registerForm=this.formbuilder.group({
        startLocation:['',Validators.required],
        destination:['',Validators.required],
        car:[],
        seatsAvailable:[1,this.checkSeats],
        Offerid:['',Validators.required]
      });
    }
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
  update(){
    this.registerService.updateRide({
      id:this.toUpdateRide.offerId,
      offerId:this.registerForm.controls['Offerid'].value,
      name:this.user,
      car:this.registerForm.controls['car'].value,
      seatsLeft:this.registerForm.controls['seatsAvailable'].value,
      pickUp:this.registerForm.controls['startLocation'].value,
      destination:this.registerForm.controls['destination'].value
    }).subscribe({
      next:()=>{
        this.submitted=true;
        this.updated=true;}
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
