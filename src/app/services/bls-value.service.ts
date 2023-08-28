import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlsValueService {
  container: any[] = [];

  private booleanValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  booleanValue$: Observable<boolean> = this.booleanValue.asObservable();

  private sendArray: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  sendArray$: Observable<any> = this.sendArray.asObservable();

  private recieveArray: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  recieveArray$: Observable<any> = this.recieveArray.asObservable();

  constructor() {}

  setBool(value: boolean) {
    this.booleanValue.next(value);
  }

  setSendArr(value: any) {
    const currentData = this.sendArray.getValue();
    currentData.push(value);
    this.sendArray.next(currentData);
  }

  setRevieveArr(value: any) {
    const currentData = this.recieveArray.getValue();
    currentData.push(value);
    this.recieveArray.next(currentData);
  }
}
