import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlsValueService } from 'src/app/services/bls-value.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  popupArray: any[] = [];
  private subscription: Subscription;

  constructor(private blsValue: BlsValueService) {
    this.subscription = this.blsValue.array$.subscribe((value) => {
      this.popupArray = value;
      if (this.popupArray.length == 5) {
        this.popupArray.shift()
      }
    });
  }
}
