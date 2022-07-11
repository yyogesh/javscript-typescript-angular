import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost'
})
export class CostPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value > 3500 ? 'High Price' : 'Low Price';
  }
}
