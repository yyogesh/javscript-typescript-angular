import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Game } from '../../models/game';
import { SelectOption } from '../../models/selectOption';
import { User } from '../../models/user';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {
  filterText = '';
  showImage = false;
  games: Game[] = [];
  carList: SelectOption[] = [
    { text: 'BMW', value: 'bmw' },
    { text: 'MG', value: 'mg' },
    { text: 'Audi', value: 'audi' }
  ]
  productList: SelectOption[] = [];
  userSubscription: any = null;
  users$: Observable<User[]> = of();
  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGameList();
    this.productList = this.games.map(game => ({
      text: game.productName,
      value: game.productName
    }));

    this.gameService.getGameListObservable().subscribe((response: Game[]) => {
      console.log('response', response);
    }, (err) => {
      console.log('error', err);
    })


    this.users$ = this.gameService.getUsers();

    this.userSubscription = this.gameService.getUsers().subscribe(users => {
      console.log('getUsers', users);
    })

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

  ngOnDestroy(): void {
    if (!!this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
