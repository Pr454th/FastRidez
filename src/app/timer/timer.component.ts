import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:number=0;
  flag:boolean=false;
  start:any;
  begin()
  {
    this.flag=true;
    this.start=setInterval(()=>{
    this.count++;
    },1000);
  }
  end()
  {
    clearInterval(this.start);
    this.count=0;
  }
}
