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
} from 'firebase/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';

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
  recieveArr: any[] = [];

  db = getFirestore();
  colRef = collection(this.db, 'BloodSugarLevel');
  q = query(this.colRef, orderBy('Date'));

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

    const data = [
      this.popups.length,
      userParam.number,
      userParam.date,
      userParam.time,
      this.bmiColor,
    ];
    this.blsValue.setSendArr(data);

    addDoc(this.colRef, {
      BSL: userParam.number,
      Date:
        userParam.date.split('-')[2] +
        '-' +
        userParam.date.split('-')[1] +
        '-' +
        userParam.date.split('-')[0],
      Hour: userParam.time,
      createdAt: serverTimestamp(),
    });

    onSnapshot(this.q, (snapshot) => {
      let bsl: any[] = [];
      snapshot.docs.forEach((doc) => {
        bsl.push({ ...doc.data(), id: doc.id });
      });
      console.log(bsl);
    });
  }

  cancelAddBlsLevel(): boolean {
    return (this.isClicked = false);
  }

  addBlsLevel(formValue: NgForm) {}
}
