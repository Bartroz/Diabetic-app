import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { UsernameService } from '../services/username.service';
import { HomepageComponent } from '../components/homepage/homepage.component';

@Directive({
  selector: '[appChecker]',
})
export class CheckerDirective{
  @Input() appChecker: any;
  
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private userName: UsernameService
  ) {}

  @HostListener('keyup.enter') changeBorder() {
    if ((this.userName.isEmpty = true)) {
      this.border('1px solid red');
      console.log(`${this.appChecker.value}`);
    }
  }

  @HostListener('click') changeBorder1() {
    if ((this.userName.isEmpty = true)) {
      this.border('1px solid red');
    }
  }


  border(color: string) {
    if (`${this.appChecker}` === 'input') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', color);
    } else if (`${this.appChecker}` === 'button') {
       const input = document.getElementById('textInput');
      this.renderer.setStyle(input, 'border', color)
      console.log('kliknieto button');
    }
  }
}
