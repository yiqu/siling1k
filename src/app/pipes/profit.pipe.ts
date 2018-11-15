import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'profit'})
export class ProfitPipe implements PipeTransform {
  transform(value: number): string {
    let result;
    if (isNaN(value)) {
      return "N/A";
    } else if (value > 0) {
      result = "UP +$" + value;
    } else {
      result = "DOWN -$" + Math.abs(value);
    }
    return result;
  }
}