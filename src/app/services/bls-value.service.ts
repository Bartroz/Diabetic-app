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

  private Array: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  array$: Observable<any> = this.Array.asObservable();

  constructor() {}

  setBool(value: boolean) {
    this.booleanValue.next(value);
  }

  setArr(value: any) {
    const currentData = this.Array.getValue()
    currentData.push(value)
    this.Array.next(currentData);
  }

}
