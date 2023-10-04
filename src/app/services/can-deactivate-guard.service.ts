import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomepageComponent } from '../components/homepage/homepage.component';


@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<HomepageComponent>
{
  canDeactivate(
    component: HomepageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.canNavigate == true) {
      return true; 
    } else {
      return false
    }
  }
}
