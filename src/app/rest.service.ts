import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) { }
  // admin!:string;
  setUser(user:string){
    // this.user=user;
    sessionStorage.setItem('user',user);
  }
  getUser():string
  {
    let user:any=sessionStorage.getItem('user');
    return user;
  }
  getMail():Observable<any>{
    return this.http.get('http://localhost:3000/getmail');
  }
  getUserMail():any{
    this.getMail().subscribe({
      next:(data)=>{return data.email}
    });
  }
  removeUser(){
    sessionStorage.setItem('user',"");
  }
  enableAdmin(){
    sessionStorage.setItem('admin','secretadmin');
  }
  getAdmin(){
    let ad:any=sessionStorage.getItem('admin');
    return ad;
  }
  disableAdmin(){
    sessionStorage.setItem('admin','');
  }
}
