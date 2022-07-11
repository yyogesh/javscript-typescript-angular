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

const components = [
  GameListComponent,
  GameDetailComponent,
  GameComponent,
  CostPipe
]

@NgModule({
  declarations: [...components, FallbackImagePipe, GameFilterPipe],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [GameComponent]
})
export class GameModule { }
