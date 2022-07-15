import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, tap, throwError } from 'rxjs';
import { Game } from '../models/game';
import { User } from '../models/user';
import { games } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }


  getGameList(): Game[] {
    return games;
  }

  getGameListObservable(): Observable<Game[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(games);
      }, 2000)
    })
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(3),
      tap(res => console.log('tap operator ', res)),
      map(res => res),
      catchError(this.handleError),
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
