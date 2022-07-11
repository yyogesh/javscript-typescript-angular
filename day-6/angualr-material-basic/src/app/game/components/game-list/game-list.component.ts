import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  filterText = '';
  showImage = false;
  games: Game[] = [];
  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGameList();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
