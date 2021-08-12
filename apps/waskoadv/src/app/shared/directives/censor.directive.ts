import { Directive } from '@angular/core';
import { AbstractControl, NgModel, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[waskoCensor]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CensorDirective, // useClass: CensorValidators
    multi: true
  }]
})
export class CensorDirective implements Validator {

  constructor(
    // private model: NgModel
  ) {
    // model.control.setValidators([])
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return String(control.value).includes('batman') ? {
      // required: true,
      censor: { badword: 'batman' }
    } : null
  }

}
