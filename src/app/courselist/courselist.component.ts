import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  course!:any[];
  courses:any[]=[
    {id:1,name:"python"},
    {id:2,name:"c"},
    {id:3,name:"R"},
    {id:4,name:"Java"},
  ];
  //parent to child
  @Input() set cName(c:string)
  {
    this.course=[];
    for(let i=0;i<this.courses.length;i++)
    {
      if(this.courses[i].name===c)
      {
        this.course.push(this.courses[i]);
      }
    }
  }
  //child to parent
  @Output() OnRegister=new EventEmitter<string>();
  register(courseName:string)
  {
    this.OnRegister.emit(courseName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
