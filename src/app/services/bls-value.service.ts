import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlsValueService {
  container: any[] = [];

  private booleanValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  booleanValue$: Observable<boolean> = this.booleanValue.asObservable();

  private sendArray: Subject<any> = new Subject<any>();
  sendArray$: Observable<any> = this.sendArray.asObservable();

  private recieveArray: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  recieveArray$: Observable<any> = this.recieveArray.asObservable();

  constructor() {}

  setBool(value: boolean) {
    this.booleanValue.next(value);
  }

  setSendArr(value: any) {
    this.sendArray.next(value);
  }

  setRevieveArr(value: any) {
    this.recieveArray.next(value);
  }
}
