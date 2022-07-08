import { Component, OnInit } from '@angular/core';
import { users } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = users;
  selectedCountry = 2;
  subjects = {
    subject1: 'HINDI',
    subject2: 'ENGLISH',
    subject3: 'MATCH',
  }
  countryies = [{ id: 1, name: 'INDIA' }, { id: 2, name: 'USA' }, { id: 3, name: 'UK' }]
  objectKeys = Object.keys;
  constructor() { }

  ngOnInit(): void {
  }

  handleCountryChange() {

  }

  // getSubjectProperty(key: string) {
  //   return this.subjects[key as string] as an;
  // }

}
