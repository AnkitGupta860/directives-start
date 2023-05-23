import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string ;
  @Input() HighlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private Renderer: Renderer2) { }

  ngOnInit() {
    // this.Renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.Renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.HighlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.Renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
