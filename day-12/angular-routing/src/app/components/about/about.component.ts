import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { Clean } from 'src/app/services/clean.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends Clean implements OnInit {
  data$ = interval(1000);
  // dataSubscription: Subscription | undefined;
  dataSubscription!: Subscription;

  // destory$ = new Subject<void>();


  ngOnInit(): void {
    // this.dataSubscription = this.data$.subscribe(data => {
    //   console.log('data', data);
    // })

    // this.data$.pipe(take(1)).subscribe(data => {
    //   console.log('data', data);
    // })

    // this.data$.pipe(takeWhile(value => value < 5)).subscribe(data => {
    //   console.log('data', data);
    // })

    // this.dataSubscription.add(this.data$.subscribe(data => {
    //   console.log('data', data);
    // }))

    // this.dataSubscription.add(this.data$.subscribe(data => {
    //   console.log('data', data);
    // }))

    this.data$.pipe(takeUntil(this.destory$)).subscribe(data => {
      console.log('data', data);
    })
  }

  // ngOnDestroy(): void {
  //   // this.dataSubscription?.unsubscribe();
  //   // this.destory$.next();
  //   // this.destory$.complete();
  // }
}
