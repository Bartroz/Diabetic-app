import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BlsValueService } from 'src/app/services/bls-value.service';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  collectionGroup,
} from 'firebase/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-bls-value-popup',
  templateUrl: './bls-value-popup.component.html',
  styleUrls: ['./bls-value-popup.component.scss'],
})
export class BlsValuePopupComponent{
  private subscription: Subscription;
  popups: number[] = [];
  container: any[] = [];
  isClicked: boolean;
  bmiColor: string;
  recieveArr: any[] = [];
  bsl: any[] = [];

 

  constructor(
    private blsValue: BlsValueService,
    private firebase: FirebaseService

  ) {
    this.subscription = this.blsValue.booleanValue$.subscribe(
      (value) => (this.isClicked = value)
    );

    this.subscription = this.blsValue.recieveArray$.subscribe((arr) => {
      this.recieveArr = arr;
      console.log('Bls value component - recived arr', this.recieveArr);
    });
  }


  submitBlsLevel(userParam: any): void {
    if (userParam.number < 100) {
      this.bmiColor = 'red';
    } else if (userParam.number >= 100 && userParam.number <= 160) {
      this.bmiColor = 'green';
    } else {
      this.bmiColor = 'red';
    }

    addDoc(this.firebase.colRef, {
      Value: userParam.number,
      Date:
        userParam.date.split('-')[1] +
        '-' +
        userParam.date.split('-')[2] +
        '-' +
        userParam.date.split('-')[0],
      Hour: userParam.time,
      createdAt: serverTimestamp(),
    });



    const data = [
      this.popups.length,
      userParam.number,
      userParam.date,
      userParam.time,
      this.bmiColor,
    ];
    this.blsValue.setSendArr(data);
  }

  cancelAddBlsLevel(): boolean {
    return (this.isClicked = false);
  }

  addBlsLevel(formValue: NgForm) {}
}
