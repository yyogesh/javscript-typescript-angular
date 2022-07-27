import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(shareReplay());
  }

  getUserById(id: string) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
