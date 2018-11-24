import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  pure: true
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    let regex: RegExp = /^([^\s]+)/;
    return value.match(regex)[0];
  }
}