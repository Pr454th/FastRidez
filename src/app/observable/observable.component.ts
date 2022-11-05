import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  data!:Observable<number>;
  mydatas:number[]=[];
  errors!:boolean;
  finished!:boolean;

  fetchData(){
    this.data=new Observable(observe=>{
      setInterval(()=>{observe.next(11)},1000);
      setInterval(()=>{observe.next(22)},2000);
      setInterval(()=>{observe.next(33)},3000);
      setInterval(()=>{observe.complete()},4000);
    });
    this.data.subscribe((value)=>this.mydatas.push(value),
    error=>this.errors=true,
    ()=>this.finished=true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
