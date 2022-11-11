import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  constructor(private http:HttpClient) { }
  getRides():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/getrides')
  }
  updateSeats(uride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'});
    console.log(uride);
    return this.http.put<any>(`http://localhost:3000/updateride/${uride.offerId}`,uride,{headers:options}).pipe(tap(()=>console.log("updated")));
  }
  deleteRide(dride:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/deleteride/${dride.offerId}`);
  }
  updateRide!:any;
  setUpdateRide(uride:any){
    this.updateRide=uride;
  }
  getUpdateRide():any{
    return this.updateRide;
  }
  unsetUpdateRide(){
    this.updateRide="";
  }
  setHistory(history:any,user:any):Observable<any>{
    const options=new HttpHeaders({'content-Type':'application/json'});
    const newHistory={seatsLeft:history.seatsLeft,name:history.name,car:history.car,offerId:history.offerId,pickUp:history.pickUp,destination:history.destination,bookingUser:user};
    return this.http.post('http://localhost:3000/history',newHistory,{headers:options}).pipe();
  }
  getHistory():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/history');
  }
  deleteHistory(dRide:any):Observable<any>{
    console.log(dRide);
    console.log(`http://localhost:3000/history/${dRide.offerId}/${dRide.bookingUser}/${dRide.seatsLeft}`);
    return this.http.delete(`http://localhost:3000/history/${dRide.offerId}/${dRide.bookingUser}/${dRide.seatsLeft}`).pipe();
  }
  getLogs():Observable<any>{
    return this.http.get<any>('http://localhost:3000/request-logs').pipe(tap((data)=>console.log(data)));
  }
  
  //booking info
  sendBookingInfo(ride:any):Observable<any>{
    const options=new HttpHeaders({'content-Type':'application/json'});
    return this.http.post<any>('http://localhost:3000/sendmail',{headers:options}).pipe();
  }
}
