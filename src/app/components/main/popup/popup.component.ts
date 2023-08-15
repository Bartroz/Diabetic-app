import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { BlsValueService } from 'src/app/services/bls-value.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  popupArray: any[] = [];

  constructor(private blsValue: BlsValueService) {
    this.popupArray = this.blsValue.getArray();
  }
}
