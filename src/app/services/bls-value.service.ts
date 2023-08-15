import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlsValueService {
  container: any[] = [];
  isClicked: boolean = false;

  constructor() {}

  getArray() {
    return [this.container];
  }
  getBool() {
    return this.isClicked;
  }
}
