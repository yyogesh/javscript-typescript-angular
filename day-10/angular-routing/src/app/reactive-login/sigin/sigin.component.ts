import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Component({
  selector: 'app-reactive-signin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private customValidationService: CustomValidationService) { }
  // registerForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormControl()
  // })
  ngOnInit(): void {
    this.registerForm = this.buildForm();
  }

  // public get form() {
  //   return this.registerForm.controls;
  // }

  unamePattern = "^[a-z0-9_-]{8,15}$";
  // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  // mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  private buildForm() {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      lastName: [{ value: 'kumar', disabled: true }, Validators.required],
      // info: this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: [''],
      notification: ['email'],
      websiteUrl: ['', [this.customValidationService.validateUrl]],
      rating: ['', [this.customValidationService.ratingRangeValue(1, 6)]]
      // })
    })
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  setNotification(notificationType: string) {
    const phoneControl = this.registerForm.get('phoneNumber');
    if (notificationType === 'text') {
      phoneControl?.setValidators(Validators.required);
      this.registerForm.patchValue({
        phoneNumber: '12345',
      })
    } else {
      phoneControl?.clearValidators();
      this.registerForm.setValue({
        firstName: 'abc',
        lastName: 'xyz',
        password: '1233',
        email: 'abc@gmail.com',
        phoneNumber: '123',
        notification: 'email',
        websiteUrl: 'http://google.com',
        rating: '1'
      })
    }
    phoneControl?.updateValueAndValidity();
  }
}
