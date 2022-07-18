import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { ManageInteractionService } from '../../services/manage-interaction.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  constructor(private readonly manageInteractionService: ManageInteractionService) { }

  ngOnInit(): void {
    this.manageInteractionService.gameInfo$.subscribe((game: Game) => {
      console.log('GameDetailComponent', game);
    })
  }

}
