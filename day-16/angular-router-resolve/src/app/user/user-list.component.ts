import { User } from "./user";
import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UsersService } from "./user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  template: `
    <ng-container *ngIf="users$ | async as users">
      <div *ngFor="let user of users" class="user-list">
        <div style="flex-grow: 1;">
          <h5>{{ user.name }}</h5>
          <p>{{ user.email }}</p>
        </div>
        <a mat-stroked-button [routerLink]="['user', user.id, user.name]" [queryParams]="{email : user.email}">Details</a>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .user-list {
        display: flex;
        margin: 3px;
        padding: 5px 7px;
        background-color: #fafafa;
        max-width: 500px;
        align-items: center;
      }
    `,
  ],
})

export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private users: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.users.getUsers();
    // this.router.navigate(['/user', 123])
  }
}