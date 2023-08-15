import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlsValueService } from 'src/app/services/bls-value.service';

@Component({
  selector: 'app-bls-value-popup',
  templateUrl: './bls-value-popup.component.html',
  styleUrls: ['./bls-value-popup.component.scss'],
})
export class BlsValuePopupComponent{
  popups: number[] = [];
  isClicked: boolean;

  constructor(private blsValue: BlsValueService) {
}


  submitBlsLevel(userParam: any) {
    this.isClicked = false;
    this.blsValue.container.push([
      this.popups.length,
      userParam.number,
      userParam.date,
      userParam.time,
    ]);
  }

  cancelAddBlsLevel() {
    // this.isClicked = false;
    console.log(this.isClicked);
  }

  addBlsLevel(formValue: NgForm) {}
}
