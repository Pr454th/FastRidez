import { Component, OnInit } from '@angular/core';
import { RideServiceService } from '../book-ride/ride-service.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  constructor(private rideService:RideServiceService,
    private userLog:RestService) { }
  logs!:any;
  admin!:string;
  ngOnInit(): void {
    this.admin=this.userLog.getAdmin();
    this.rideService.getLogs().subscribe({
      next:(data)=>{
        this.logs='<p>'+data.log.replace(/\n/g, '<br />')+'</p>';
        // this.logs=data.log;
        console.log(this.logs);
      }
    });
  }

}
