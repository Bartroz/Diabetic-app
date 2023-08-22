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

  constructor(private blsValue: BlsValueService) {
    this.subscription = this.blsValue.booleanValue$.subscribe(
      (value) => (this.isClicked = value)
    );
  }

  submitBlsLevel(userParam: any) {
    // this.isClicked = false;
    const data = [ this.popups.length,
      userParam.number,
      userParam.date,
      userParam.time]
      this.blsValue.setArr(data)
  
  }

  cancelAddBlsLevel() {
    this.isClicked = false;
    console.log(this.isClicked);
  }

  addBlsLevel(formValue: NgForm) {}
}
