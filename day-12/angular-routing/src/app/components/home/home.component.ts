import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;
  searchField!: FormControl;
  users: any[] = [];
  users$!: Observable<any>;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.buildForm();
    this.users$ = this.userService.getUser();
    this.getUser();
    this.subscribeSearchField();
  }

  public getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.users = res;
    })

    this.users$.subscribe(user => {
      console.log('user', user)
    })

    this.users$.subscribe(console.log)
    this.users$.subscribe(console.log)
    this.users$.subscribe(console.log)
    this.users$.subscribe(console.log)
    this.users$.subscribe(console.log)
  }

  private buildForm(): void {
    this.searchForm = this.fb.group({
      search: this.searchField
    })
  }

  private subscribeSearchField() {
    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => !!value.trim()),
      switchMap(value => this.userService.getUserById(value))
    ).subscribe(value => {
      console.log('searchValue', value);
      // this.userService.getUserById(value).subscribe(res => {
      //   console.log('getUserById', res);
      // });
    })
  }


}
