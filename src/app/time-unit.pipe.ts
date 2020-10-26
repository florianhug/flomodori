import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeUnit'
})
export class TimeUnitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value < 60) {
      return `seconds`;
    } else {
      return `minutes`;
    }
  }
}
