import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, gender:string=''){
    return (gender=='female'? ('Miss.'+value):('Mr.'+value));
  }

}
