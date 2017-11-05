import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private e: ElementRef) { }

  ngOnInit() {
    this.e.nativeElement.style.backgroundColor = 'green';
  }
}
