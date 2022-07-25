import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';


export interface ContactForm extends FormGroup<{
  username: FormControl<string>,
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  age: FormControl<number>
}> { }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // registerForm!: FormGroup
  form!: ContactForm;
  constructor(private fb: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   login: new FormControl(null, Validators.required),
    //   passwordGroup: new FormGroup({
    //     password: new FormControl('', Validators.required), // FormControl<string | null>
    //     confirm: new FormControl('', { validators: Validators.required, nonNullable: true })
    //   }),
    //   rememberMe: new FormControl(false, Validators.required) // FormControl<string | null>
    // });

    // this.registerForm.reset()

    // this.registerForm = new UntypedFormGroup({
    //   login: new UntypedFormControl(null, Validators.required),
    //   passwordGroup: new UntypedFormGroup({
    //     password: new UntypedFormControl('', Validators.required),
    //     confirm: new UntypedFormControl('', Validators.required)
    //   }),
    //   rememberMe: new UntypedFormControl(false, Validators.required)
    // });

    this.form = this.fb.group({
      username: this.fb.control('test'),
      firstName: this.fb.control('abc'),
      lastName: this.fb.control('xyz'),
      age: this.fb.control(123)
    })

  }

  loadFromHttp() {
    this.form.patchValue({
      age: 123,
      firstName: 'asfd',
      lastName: 'xyxz',
      username: 'asdfxyz'
    })
  }

  reset() {
    this.form.reset();
  }
}
