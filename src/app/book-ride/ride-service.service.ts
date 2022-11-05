import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  constructor(private http:HttpClient) { }
  getRides():Observable<any[]>{
    return this.http.get<any[]>('https://fastridez-test-api.herokuapp.com/getrides')
  }
  updateSeats(uride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'});
    console.log(uride);
    return this.http.put<any>(`https://fastridez-test-api.herokuapp.com/updateride/${uride.offerId}`,uride,{headers:options}).pipe(tap(()=>console.log("updated")));
  }
  deleteRide(dride:any):Observable<any>{
    return this.http.delete(`https://fastridez-test-api.herokuapp.com/deleteride/${dride.offerId}`);
  }
  setHistory(history:any,user:any):Observable<any>{
    const options=new HttpHeaders({'content-Type':'application/json'});
    const newHistory={seatsLeft:history.seatsLeft,name:history.name,car:history.car,offerId:history.offerId,pickUp:history.pickUp,destination:history.destination,bookingUser:user};
    return this.http.post('https://fastridez-test-api.herokuapp.com/history',newHistory,{headers:options}).pipe();
  }
  getHistory():Observable<any[]>{
    return this.http.get<any[]>('https://fastridez-test-api.herokuapp.com/history');
  }
  deleteHistory(dRide:any):Observable<any>{
    console.log(dRide);
    console.log(`https://fastridez-test-api.herokuapp.com/history/${dRide.offerId}/${dRide.bookingUser}/${dRide.seatsLeft}`);
    return this.http.delete(`https://fastridez-test-api.herokuapp.com/history/${dRide.offerId}/${dRide.bookingUser}/${dRide.seatsLeft}`).pipe();
  }
}
