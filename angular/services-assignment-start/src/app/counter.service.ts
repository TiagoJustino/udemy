// counter.service.ts
import { Injectable } from '@angular/core';
@Injectable()
export class CounterService {
  counter: number = 0;
  constructor() { }
  public increment() {
    this.counter++;
  }
}

