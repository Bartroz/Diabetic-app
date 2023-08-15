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
  @Input() color: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
