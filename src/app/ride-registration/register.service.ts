import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  addRide(ride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'});
    console.log(ride);
    return this.http.post('http://localhost:3000/addride',ride,{headers:options}).pipe();
  }
  updateRide(ride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'});
    console.log(ride);
    const uride={
      offerId:ride.offerId,
      name:ride.name,
      car:ride.car,
      seatsLeft:ride.seatsLeft,
      pickUp:ride.pickUp,
      destination:ride.destination
    };
    const id=ride.id;
    return this.http.put(`http://localhost:3000/updateride/${id}`,uride,{headers:options}).pipe();
  }
}
