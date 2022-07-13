import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit } from '@angular/core';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game-wrapper',
  templateUrl: './game-wrapper.component.html',
  styleUrls: ['./game-wrapper.component.scss']
})
export class GameWrapperComponent implements OnInit, AfterContentInit {
  @ContentChild(GameInfoComponent) gameInfoComponent: GameInfoComponent = null as any;
  constructor() { }
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.gameInfoComponent.footerTitle = 'title properties changed'
  }
}
