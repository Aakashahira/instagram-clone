import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidator {
  static whiteSpace(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = control?.value?.trim();
      return isValid ? null : { required: true };
    }
  }
}