import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementHover]'
})
export class ElementHoverDirective {
  @Input() title = ''
  @HostBinding('class.element-outline-primary') private inHovering = false;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    // render.setStyle(elementRef.nativeElement, 'backgroundColor', 'silver');
  }

  @HostListener('mouseover') onMouseOver() {
    const element = this.elementRef.nativeElement.querySelector('.rating-text');
    this.render.setStyle(element, 'display', 'block');
    this.inHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const element = this.elementRef.nativeElement.querySelector('.rating-text');
    this.render.setStyle(element, 'display', 'none');
    this.inHovering = false;
    console.log('mouseout', this.title);
  }

}
