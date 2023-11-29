import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
})
export class CutTextPipe implements PipeTransform {
  transform(str: string, length: number): string {
    let slicedString = str.slice(0, length);

    if (str.length > length) {
      slicedString = slicedString + '...';
    }

    return slicedString;
  }
}
