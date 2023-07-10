import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective {

//   @Input() backgroundButton: string;

  @HostListener('mouseenter') onMouseEnter() {
    // this.buttonColor(this.backgroundButton);
    this.buttonColor("red");
  }

  constructor(private el: ElementRef) {}

  buttonColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
