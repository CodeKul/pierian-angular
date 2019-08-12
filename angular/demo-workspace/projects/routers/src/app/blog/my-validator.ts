import { AbstractControl, ValidationErrors } from '@angular/forms';

export class BlogValidator {

    static custValidator(c: AbstractControl): null | ValidationErrors {
        if (c.value.charAt(0) == 'a' || c.value.charAt(0) == 'A') {
            return null
        }
        return {
            isStartA: true
        }
    }
}