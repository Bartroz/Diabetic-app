import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

const routes: Routes = [
  {path:"", redirectTo:"homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "userInformation", component: UserInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
