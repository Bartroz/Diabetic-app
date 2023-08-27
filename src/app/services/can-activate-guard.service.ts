import { Injectable } from '@angular/core';
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
export class CanActivateGuardService implements CanActivate {
  private subscription: Subscription;
  value: boolean;

  constructor(private router: Router, private formService: FormValueService) {
    this.subscription = this.formService.formValue$.subscribe((value) => {
      this.value = value;
      console.log(this.value + 'this is guard constructor');
      if (value === true) {
        console.log('Guard - form is valid');
      } else {
        console.log('Guard - form is not valid');
      }
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
      this.router.navigate(['/userInformation']);
      return true;
    } else {
      return false;
    }
  }
}
