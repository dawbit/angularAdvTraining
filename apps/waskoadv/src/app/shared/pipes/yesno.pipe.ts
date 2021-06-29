import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno',
  // pure: false // disable cache
})
export class YesnoPipe implements PipeTransform {

  transform(value: boolean, yes = 'Yes', no = 'No'): unknown {
    // return Date.now() // impure expression / function
    return value ? yes : no; // pure expression
  }

}
