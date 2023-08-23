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
  blsValueColor: string;
  private subscription: Subscription;
  i: number = 0;

  constructor(private blsValue: BlsValueService) {
    this.subscription = this.blsValue.array$.subscribe((value) => {
      this.popupArray = value;
      if (this.popupArray[this.i][1] < 100) {
        this.blsValueColor = 'red';
      } else {
        this.blsValueColor = 'green';
      }

      console.log(this.popupArray[this.i][1]);
    });
    this.i++;
  }
}
