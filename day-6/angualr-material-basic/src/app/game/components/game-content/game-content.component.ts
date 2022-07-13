import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
export class GameContentComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any> = '' as any;
  constructor() { }

  ngOnInit(): void {
  }

}
