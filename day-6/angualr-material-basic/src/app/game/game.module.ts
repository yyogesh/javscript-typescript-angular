import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameComponent } from './game.component';
import { MaterialModule } from 'src/modules/material.module';
import { CostPipe } from './pipes/cost.pipe';
import { FallbackImagePipe } from './pipes/fallback-image.pipe';
import { GameFilterPipe } from './pipes/game-filter.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { DropListComponent } from './components/drop-list/drop-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameContentComponent } from './components/game-content/game-content.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameWrapperComponent } from './components/game-wrapper/game-wrapper.component';

const components = [
  GameListComponent,
  GameDetailComponent,
  GameComponent,
  CostPipe
]

@NgModule({
  declarations: [...components, FallbackImagePipe, GameFilterPipe, StarComponent, DropListComponent, GameCardComponent, GameContentComponent, GameInfoComponent, GameWrapperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [GameComponent]
})
export class GameModule { }
