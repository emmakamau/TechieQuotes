import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any): number {
    let today:any=new Date();
  
    var dateDiff=Math.abs(value-today);
    var dateSeconds=dateDiff*0.001;
    const seconds=86400;
    var daysAfter= Math.floor(dateSeconds/seconds);

    return daysAfter;
  }

}
