import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}
  // admin!:string;
  setUser(user: string) {
    // this.user=user;
    sessionStorage.setItem('user', user);
  }
  getUser(): string {
    let user: any = sessionStorage.getItem('user');
    return user;
  }
  getMail(u: any): Observable<any> {
    return this.http
      .get(`https://fastridez-api.herokuapp.com/getmail/${u}`)
      .pipe();
  }
  removeUser() {
    sessionStorage.setItem('user', '');
  }
  enableAdmin() {
    sessionStorage.setItem('admin', 'secretadmin');
  }
  getAdmin() {
    let ad: any = sessionStorage.getItem('admin');
    return ad;
  }
  disableAdmin() {
    sessionStorage.setItem('admin', '');
  }
}
