import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userLog:RestService,
    private router:Router) { }
  admin!:string;
  ngOnInit(): void {
    this.admin=this.userLog.getAdmin();
  }
  toRLogs(){
    this.router.navigate(['/logs']);
  }
  toHistories(){
    this.router.navigate(['/history']);
  }

}
