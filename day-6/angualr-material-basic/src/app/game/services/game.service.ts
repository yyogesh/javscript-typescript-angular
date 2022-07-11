import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { games } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }


  getGameList(): Game[] {
    return games;
  }
}
