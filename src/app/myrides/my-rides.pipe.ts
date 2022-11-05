import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRides'
})
export class MyRidesPipe implements PipeTransform {

  transform(value: any[],uname:any): any[] {

    return value.filter((x)=>x.name===uname);
  }

}
