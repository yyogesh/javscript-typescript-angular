import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Game } from '../models/game';

const gameData = {
  "productId": 1,
  "productName": "Uncharted 4 : A Thief End ",
  "productCode": "PSG-0001",
  "releaseDate": "May 10, 2016",
  "description": "A Thief s End is an action-adventure video game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4 video game console. ",
  "cost": 2999,
  "price": 3999.290,
  "genre": "Action-adventure game ",
  "imageUrl": "assets/images/ps4-uncharted.jpeg",
  "starRating": 5
}

@Injectable({
  providedIn: 'root'
})
export class ManageInteractionService {
  private gameInfoSubject = new BehaviorSubject<Game>(gameData);

  public gameInfo$ = this.gameInfoSubject.asObservable();
  constructor() { }

  public getGameInfo() {
    return this.gameInfoSubject.asObservable();
  }

  public gameInfoAnnonce(game: Game) {
    this.gameInfoSubject.next(game);

    // this.getGameInfo().subscribe(res => {
    //   console.log('ManageInteractionService', res);
    // })
  }
}
