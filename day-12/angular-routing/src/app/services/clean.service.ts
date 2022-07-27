import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class Clean implements OnDestroy {
  destory$ = new Subject<void>();

  constructor() { }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
