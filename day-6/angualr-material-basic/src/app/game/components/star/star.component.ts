import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  @Output() ratingClicked = new EventEmitter();
  totalStarWidth = 120;
  starWidth = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (this.rating) {
      this.starWidth = 24 * this.rating;
    }
  }

  ngOnInit(): void {
  }

  public ratingStartClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
  }

}
