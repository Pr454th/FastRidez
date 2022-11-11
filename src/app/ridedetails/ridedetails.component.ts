import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RideServiceService } from '../book-ride/ride-service.service';
import { BookService } from '../book/book.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {
  selectedRide!:any;
  booked:boolean=false;
  user!:string;
  @Input() set getRide(ride:string)
  {
    this.selectedRide=ride;
  }
  flag!:boolean;
  @Input() set invalidRide(flag:boolean)
  {
    this.flag=flag;
  }

  @Output() bookSelectedRide=new EventEmitter<string>();
  bookRide(sRide:string)
  {
    this.ridesService.sendBookingInfo(sRide);
    this.bookSelectedRide.emit(sRide);
    this.booked=true;
    this.ridesService.setHistory(this.selectedRide,this.user).subscribe();
  }

  @Output() closeRide=new EventEmitter<boolean>();
  // back:boolean=false;
  backRide(){
    this.closeRide.emit(false);
  }
  constructor(private ridesService:RideServiceService,
    private userLog:RestService) { }

  ngOnInit(): void {
    this.user=this.userLog.getUser();
  }

}
