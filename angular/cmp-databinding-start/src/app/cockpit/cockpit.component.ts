import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onElementCreated = new EventEmitter<{type: string, name: string, content: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName: string, newServerContent: string) {
    this.onElementCreated.emit({
      type: 'server',
      name: newServerName,
      content: newServerContent
    });
  }

  onAddBlueprint(newServerName: string, newServerContent: string) {
    this.onElementCreated.emit({
      type: 'blueprint',
      name: newServerName,
      content: newServerContent
    });
  }

}
