import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameService } from './services/username.service';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { UserInformationService } from './services/userinformation.service';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { SummaryComponent } from './components/main/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BmiColorDirective } from './directives/bmiColor.directive';
import { PopupComponent } from './components/main/popup/popup.component';
import { BlsValuePopupComponent } from './components/main/bls-value-popup/bls-value-popup.component';
import { BlsValueService } from './services/bls-value.service';
import { FormValueService } from './services/form-value.service';
import { loginPanelComponent } from './components/main/loginPanel/loginPanel.component';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserInformationComponent,
    MainComponent,
    NavbarComponent,
    SummaryComponent,
    BmiColorDirective,
    PopupComponent,
    BlsValuePopupComponent,
    loginPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsernameService,
    UserInformationService,
    BlsValueService,
    FormValueService,
    CanDeactivateGuard,
    FirebaseService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
