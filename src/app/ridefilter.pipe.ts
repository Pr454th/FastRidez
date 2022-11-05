import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ridefilter'
})
export class RidefilterPipe implements PipeTransform {
  transform(value: any[],option: string): any[] {
    if(option==="toOffice")
    {
      return value.filter(x=>x.destination=="Office");
    }
    else if(option==="fromOffice")
    {
      return value.filter(x=>x.pickUp=="Office");
    }
    else if(option==="Others")
    {
      return value;
    }
    return value;
  }
}
