import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'profitPercent'})
export class ProfitPercentPipe implements PipeTransform {
  transform(value: number): string {
    let result;
    let percent = (value * 100).toFixed(2);
    if (isNaN(percent)) {
      return "N/A";
    } else if (percent < 0) {
      result = percent + "%";
    } else {
      result = "+" + percent + "%";
    }
    return result;
  }
}
