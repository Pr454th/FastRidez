import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRidehover]'
})
export class RidehoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.el.nativeElement.style.backgroungColor='white';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightblue');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
  @HostListener('click') onClick()
  {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
  }

}
