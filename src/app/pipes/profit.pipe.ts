import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../shared/utils';

@Pipe({name: 'profit'})
export class ProfitPipe implements PipeTransform {
  transform(value: number): string {
    let result;
    if (isNaN(value)) {
      return "N/A";
    } 
    else if (value === 0) {
      result = "No Change"
    }
    else if (value > 0) {
      result = "+$" + Utils.toLocalFormatting(value);
    } 
    else {
      result = "-$" + Utils.toLocalFormatting(Math.abs(value));
    }
    return result;
  }
}