import { Component, OnInit } from '@angular/core';
import { RideServiceService } from '../book-ride/ride-service.service';
import { UserServiceService } from '../login/user-service.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  user!:string;
  constructor(private rideService:RideServiceService,
    private userLog:RestService) { }
  histories!:any[];
  err!:string;
  green:string="green";
  ngOnInit(): void {
    this.rideService.getHistory().subscribe({
      next:(data)=>{
        this.histories=data;
      },
      error:(err)=>this.err=err
    });
    this.user=this.userLog.getUser();
  }

}
