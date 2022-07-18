import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  model: any = {
    firstName: '',
    lastName: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model)
  }
}
