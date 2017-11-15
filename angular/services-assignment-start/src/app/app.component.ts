// app.component.ts
import {Component, OnInit} from '@angular/core';
import {CounterService} from "./counter.service";
import {UsersService} from "./users.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private counterService: CounterService, private usersService: UsersService) {}
}

