import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancate',
})
export class TrancatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
