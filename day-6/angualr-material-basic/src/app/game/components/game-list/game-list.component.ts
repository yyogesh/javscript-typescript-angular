import { Component, OnInit, SimpleChange } from '@angular/core';
import { Game } from '../../models/game';
import { SelectOption } from '../../models/selectOption';
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
  carList: SelectOption[] = [
    { text: 'BMW', value: 'bmw' },
    { text: 'MG', value: 'mg' },
    { text: 'Audi', value: 'audi' }
  ]
  productList: SelectOption[] = [];
  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGameList();
    this.productList = this.games.map(game => ({
      text: game.productName,
      value: game.productName
    }));
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  handleRatingClick(message: string) {
    console.log('message', message);
  }

  handleOptionChange(option: SelectOption) {
    this.filterText = option.value;
  }

}
