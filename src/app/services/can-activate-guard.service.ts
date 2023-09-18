import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormValueService } from './form-value.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuardService implements CanActivate, OnInit, OnChanges {
  private subscription: Subscription;
  value: boolean;

  constructor(private router: Router, public formService: FormValueService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.subscription = this.formService.formValue$.subscribe((value) => {
      this.value = value;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.value === true) {
      return true;
    } else {
      // this.router.navigate(['/homepage']);
      return false;
    }
  }
}
