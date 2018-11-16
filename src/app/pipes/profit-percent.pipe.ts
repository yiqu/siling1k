import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'profitPercent'})
export class ProfitPercentPipe implements PipeTransform {
  transform(value: number): string {
    let result;
    let percent: number = (value * 100);
    if (isNaN(percent)) {
      return "N/A";
    } else if (percent < 0) {
      result = this.roundUp(percent) + "%";
    } else {
      result = "+" + this.roundUp(percent) + "%";
    }
    return result;
  }
  
  roundUp(val: number): string {
    return val.toFixed(2);
  }
}
