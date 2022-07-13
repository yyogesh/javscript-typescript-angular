import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWrapperComponent } from './game-wrapper.component';

describe('GameWrapperComponent', () => {
  let component: GameWrapperComponent;
  let fixture: ComponentFixture<GameWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
