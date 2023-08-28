import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BlsValueService } from 'src/app/services/bls-value.service';

@Component({
  selector: 'app-bls-value-popup',
  templateUrl: './bls-value-popup.component.html',
  styleUrls: ['./bls-value-popup.component.scss'],
})
export class BlsValuePopupComponent {
  private subscription: Subscription;
  popups: number[] = [];
  container: any[] = [];
  isClicked: boolean;
  bmiColor: string;
  recieveArr = [];

  constructor(private blsValue: BlsValueService) {
    this.subscription = this.blsValue.booleanValue$.subscribe(
      (value) => (this.isClicked = value)
    );
    
    this.subscription = this.blsValue.recieveArray$.subscribe((arr) => {
      this.recieveArr = [];
      this.recieveArr = arr;
      console.log('Bls value component - recived arr', this.recieveArr);
    });
  }

  submitBlsLevel(userParam: any) {
    // this.isClicked = false;
    if (userParam.number < 100) {
      this.bmiColor = 'red';
    } else if (userParam.number >= 100 && userParam.number <= 160) {
      this.bmiColor = 'green';
    } else {
      this.bmiColor = 'red';
    }

    const data = [
      this.popups.length,
      userParam.number,
      userParam.date,
      userParam.time,
      this.bmiColor,
    ];
    this.blsValue.setSendArr(data);
  }

  cancelAddBlsLevel() {
    this.isClicked = false;
    console.log(this.isClicked);
  }

  addBlsLevel(formValue: NgForm) {}
}
