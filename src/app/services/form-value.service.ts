import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormValueService {
  private formValue: Subject<boolean> = new BehaviorSubject<boolean>(false);
  formValue$: Observable<boolean> = this.formValue.asObservable();

  constructor() {}

  getFormValue(value: boolean) {
    this.formValue.next(value);
  }
}
