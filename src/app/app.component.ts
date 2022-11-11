import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './rest.service';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title:string="angular";
  message!:string;//child to parent component
  assignedCourse(x:string)
  {
    this.message=x;
  }
  //viewchild decorator
  @ViewChild(TimerComponent) timercomponent!:TimerComponent;
  constructor(private userLog:RestService,
    private route:Router){}
  startTimer()
  {
    this.timercomponent.begin();
  }
  endTimer()
  {
    this.timercomponent.end();
  }
  //view decorator to access data from app/parent component
  // @ViewChild('ssn') ssn!:ElementRef;
  user!:string;
  admin!:string;
  option:string="Login";
  Log(){
    if(this.user){
       this.option="Login";
       this.userLog.removeUser();
    }
    if(this.admin){
      this.userLog.disableAdmin();
    }
  }
  ngDoCheck(){
    this.admin=this.userLog.getAdmin();
    this.user=this.userLog.getUser();
    if(this.user) this.option="Logout";
  }
  ngAfterViewInit()
  {

  }
  //ngAfterViewInit()
  // {
  //   this.ssn.nativeElement.style.color="red";
  // }
  // modify()
  // {
  //   this.ssn.nativeElement.style.color="green";
  // }
}
