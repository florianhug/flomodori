import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 60) {
      return String(value);
    } else {
      return String(Math.ceil(value / 60));
    }
  }
}
