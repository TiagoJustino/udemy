import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') colors: {default: string, highlight: string};
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private e: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.colors.default;
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.e.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.colors.highlight;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.e.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.colors.default;
  }
}
