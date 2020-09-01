import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[darkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor(
    private el: ElementRef,
    private rer: Renderer
    ) { }

  @HostListener('mouseover')
  darkenOn() {
    console.log('darkenOn');
    this.rer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }
  @HostListener('mouseleave')
  darkenOff() {
    this.rer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
