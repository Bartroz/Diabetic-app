import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { MainComponent } from './components/main/main.component';
import { CanActivateGuardService, canActivateUserInformation } from './services/can-activate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'userInformation',
    component: UserInformationComponent,
    canActivate: [canActivateUserInformation],
  },
  { path: 'main', component: MainComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
