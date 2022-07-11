import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../models/game';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(games: Game[], filterText: string): Game[] {
    return filterText ? games.filter(game => game.productName.toLowerCase().indexOf(filterText.toLowerCase()) > -1) : games
  }

}
