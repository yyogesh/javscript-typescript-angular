import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackImage'
})
export class FallbackImagePipe implements PipeTransform {
  transform(value: string, fallback: string): unknown {
    return value ? value : fallback;
  }
}
