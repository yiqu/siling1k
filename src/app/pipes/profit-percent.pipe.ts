import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../shared/utils';

@Pipe({
  name: 'profitPercent',
  pure: true
})
export class ProfitPercentPipe implements PipeTransform {
  transform(value: number): string {
    let result;
    let percent: number = (value * 100);
    if (isNaN(percent)) {
      return "N/A";
    } else if (percent < 0) {
      result = Utils.roundNumber(percent, 1) + "%";
    } else {
      result = "+" + Utils.roundNumber(percent, 1) + "%";
    }
    return result;
  }
}
