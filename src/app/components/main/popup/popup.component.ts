import {
  Component,
  Inject,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BlsValueService } from 'src/app/services/bls-value.service';
import { BlsValuePopupComponent } from '../bls-value-popup/bls-value-popup.component';
import { onSnapshot, orderBy, collection } from 'firebase/firestore';
import { query } from '@angular/animations';
import { FirebaseApp } from 'firebase/app';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  popupArray: any[] = [];
  blsValueColor: string;
  private subscription: Subscription;

  colRef = collection(this.firebaseService.db, 'BloodSugarLevel');
  q = query(this.colRef, orderBy('Date'), orderBy('Hour'));

  constructor(
    private blsValue: BlsValueService,
    private firebaseService: FirebaseService
  ) {
    onSnapshot(this.q, (snapshot) => {
      this.bsl = [];
      snapshot.docs.forEach((doc) => {
        this.bsl.push({ ...doc.data(), id: doc.id });
      });
      console.log(this.bsl);
    });

    this.subscription = this.blsValue.sendArray$.subscribe((value) => {
      this.popupArray.unshift(value);
      if (this.popupArray.length > 8) {
        this.popupArray.pop();
      }
    });

    let currentDate = new Date();
    let today =
      String(currentDate.getDate()) +
      '-' +
      String(currentDate.getMonth() + 1) +
      '-' +
      String(currentDate.getFullYear());
  }

  editBlsValue(value: any) {
    this.blsValue.setBool(true);
    let removedValue = this.popupArray.splice(
      this.popupArray.indexOf(value),
      1
    )[0];
    this.blsValue.setRevieveArr(removedValue);
  }

  deleteBlsValue(value: any) {
    this.popupArray.splice(this.popupArray.indexOf(value), 1);
  }
}
