import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBmiColor]',
})
export class BmiColorDirective implements OnChanges, OnInit {
  @Input() appBmiColor: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.appBmiColor);
  }
}
