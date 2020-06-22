import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 60) {
      return `${value} seconds`;
    }
    const minutes = Math.ceil(value / 60);
    return `${minutes} minutes`;
  }

}
