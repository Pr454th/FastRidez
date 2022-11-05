import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<any[]>{
    return this.http.get<any[]>('./assets/users/users.json');
  }
  isUser(user:any):Observable<any>{
    const options=new HttpHeaders({'content-Type':'application/json'});
    return this.http.post<any>('https://fastridez-api.herokuapp.com/user',user,{headers:options}).pipe();
  }
  newUser(user:any)
  {
    const options=new HttpHeaders({'content-Type':'application/json'});
    return this.http.post<any>('https://fastridez-api.herokuapp.com/adduser',user,{headers:options}).pipe();
  }
}
