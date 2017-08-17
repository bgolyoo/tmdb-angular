import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateCharacters'
})
export class TruncateCharactersPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    const separator = '';
    if (value) {
      const trail = '...';
      const splitText = value.split(separator);
      let shortText = '';
      for (let i = 0; i <= limit; i++) {
        shortText += splitText[i] + separator;
      }
      return limit < splitText.length ? shortText + trail : value;
    }
  }

}
