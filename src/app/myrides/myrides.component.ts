import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideServiceService } from '../book-ride/ride-service.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.css']
})
export class MyridesComponent implements OnInit {

  constructor(private rideService:RideServiceService,
    private userLog:RestService,
    private router:Router) { }
  rides!:any[];
  err!:any;
  user!:string;

  deleteRide(dride:any){
    this.rideService.deleteRide(dride).subscribe({
      next:()=>{
        this.rideService.getRides().subscribe({
        next:(rides)=>this.rides=rides,
        error:(err)=>this.err=err
      })
    },
    error:(err)=>this.err=err
    });
  //   this.router.navigateByUrl('/myrides', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/myrides']);
  // }); 
  }

  ngOnInit(): void {
    this.user=this.userLog.getUser();
    this.rideService.getRides().subscribe({
      next:(data)=>this.rides=data,
      error:(err)=>this.err=err
    })
  }

}
