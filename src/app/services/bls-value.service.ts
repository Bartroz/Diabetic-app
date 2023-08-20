import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlsValueService {
  container: any[] = [];
  isClicked: boolean = false;
  private booleanValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  booleanValue$: Observable<boolean> = this.booleanValue.asObservable();

  constructor() {}

  setBool(value: boolean) {
    this.booleanValue.next(value);
  }

  getArray() {
    return [this.container];
  }
  getBool() {
    return this.isClicked;
  }
}
