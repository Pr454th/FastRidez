import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'historyFilter'
})
export class HistoryFilterPipe implements PipeTransform {

  transform(value:any[],option:any): any[] {
    return value.filter(x=>x.bookingUser===option)
  }

}
