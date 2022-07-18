import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations'

import { environment } from '../environments/environment'
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'orange'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition("open => closed", [
        animate('1s 1s ease-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {
  @ViewChild('secondNameInput') secondNameInputRef: ElementRef = '' as any;
  title = 'angualr-material-basic';
  order = 1;
  isOpen = true;
  constructor() {
    console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  throw new Error('Method not implemented.');
    //It is called before ngOnInit( ) and whenever one or more data-bound input properties change. It detects simple changes in the property values.
    console.log('I am from ngOnChanges()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnInit(): void {
    // It initializes the directive/component after Angular displays the data-bound properties and is called once after ngOnChanges( ).
    console.log('I am from ngOnInit() and my order::::' + this.order);
    console.log('environment.baseURL', environment.baseURL);
    this.order++;

    this.getSubjectInfo();
  }

  ngDoCheck(): void {
    //Changes that are not detected by Angular itself are detected and resolved by it. It is called every time a change is detected and immediately after ngOnChanges() and ngOnInit( )
    console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
  }
  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }

  showInput(text: string) {
    console.log('text', text, this.secondNameInputRef.nativeElement.value);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }


  subject = new Subject();
  replaySubject = new ReplaySubject(3);
  asyncSubject = new AsyncSubject();
  getSubjectInfo() {
    this.subject.subscribe(value => {
      console.log('ObserverA: ', value)
    })

    this.subject.subscribe(value => {
      console.log('ObserverB: ', value)
    })

    this.subject.next(1);
    this.subject.next(2);

    this.replaySubject.subscribe(value => {
      console.log('replaySubject ObserverA: ', value)
    })

    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    this.replaySubject.next(6);
    this.replaySubject.next(7);

    this.replaySubject.subscribe(value => {
      console.log('replaySubject ObserverB: ', value)
    })

    this.replaySubject.next(5);

    this.asyncSubject.subscribe(value => {
      console.log('asyncSubject ObserverA: ', value)
    })

    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.next(4);

    this.asyncSubject.subscribe(value => {
      console.log('asyncSubject ObserverB: ', value)
    })
    this.asyncSubject.next(5);
    this.asyncSubject.complete();
  }

}
