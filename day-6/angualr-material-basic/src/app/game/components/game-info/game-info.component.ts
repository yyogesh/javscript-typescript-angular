import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { ManageInteractionService } from '../../services';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  footerTitle = "Footer title of game info component"
  constructor(private readonly manageInteractionService: ManageInteractionService) { }

  ngOnInit(): void {
    this.manageInteractionService.getGameInfo().subscribe((game: Game) => {
      console.log('GameInfoComponent', game);
    })
  }

}
