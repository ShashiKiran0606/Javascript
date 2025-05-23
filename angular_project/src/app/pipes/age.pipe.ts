import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date) {
    const today = new Date();
    const birthDate = new Date(value);
    let age=today.getFullYear() - birthDate.getFullYear();
    let mon=today.getMonth()-birthDate.getMonth();
    if(mon<0 || (mon==0 && today.getDate()<birthDate.getDate()))
    {
      age--;
    }
    return age;
  }

}
