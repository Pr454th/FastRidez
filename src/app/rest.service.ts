import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor() { }
  // user!:string;
  setUser(user:string){
    // this.user=user;
    sessionStorage.setItem('user',user);
  }
  getUser():string
  {
    let user:any=sessionStorage.getItem('user');
    return user;
  }
  removeUser(){
    sessionStorage.setItem('user',"");
  }
}
