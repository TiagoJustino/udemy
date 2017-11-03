// game-control.component.ts

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tick = new EventEmitter<number>();
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  start() {
    let timer = TimerObservable.create(0, 1000);
    this.subscription = timer.subscribe(t => this.tick.emit(t + 1));
  }

  stop() {
    this.subscription.unsubscribe();
  }
}
