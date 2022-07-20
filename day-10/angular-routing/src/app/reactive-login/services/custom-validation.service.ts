import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  validateUrl(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control?.value?.startsWith('https')) {
      return { invalidUrl: true }
    }
    return null;
  }

  ratingRange(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value != undefined && (isNaN(control.value) || control.value < 1 || control.value > 5)) {
      return { range: true }
    }
    return null;
  }

  ratingRangeValue(min: number, max: number): ValidatorFn {
    return function (control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value != undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
        return { range: true }
      }
      return null;
    }
  }

}
