import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actionTranslate',
  pure: true
})
export class ActionTranslate implements PipeTransform {
  transform(actionId: string, silingId: string): string {
    if (actionId === "dailyPanel") {
      return "Thank you for submitting your daily entry for " + silingId + "!";
    }
  }
}