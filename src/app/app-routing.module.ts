import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { MainComponent } from './components/main/main.component';
// import {canActivateUserInformation } from './services/can-activate-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    component: HomepageComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'userInformation',
    component: UserInformationComponent,

  },
  { path: 'main', component: MainComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
