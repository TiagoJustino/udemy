import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'TesteServer',
    content: 'Just a test!'
  }];

  onElementCreated(element: {type: string, name: string, content: string}){
    this.serverElements.push(element);
  }
}
