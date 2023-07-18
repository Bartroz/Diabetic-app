import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShowPopupService } from 'src/app/services/showpopup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['popup.component.scss'],
})
export class PopupComponent {
  @ViewChild('addBlsLevelButton') addBlsLevelButton: ElementRef;

  constructor(
    private buttonClicked: ShowPopupService,
    private elRef: ElementRef
  ) {}

  isClicked: boolean = this.buttonClicked.isButtonClicked;
}
