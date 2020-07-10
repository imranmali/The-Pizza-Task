import { Pipe, PipeTransform } from '@angular/core';
import { Rates } from './rates';
@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
   transform(value: any, args?: any): any {
      let rates:any;
      rates = new Rates().rates;
      return parseFloat(rates[args] * value+"").toFixed(2);
   }
}