import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input: any, maxLength = 100) {
    console.log('Remaining Pipe...')
    return maxLength - input.length;
  }

}
