import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { UsernameService } from './services/username.service';
import { UserInformationComponent } from './components/user-information/user-information.component';





@NgModule({
  declarations: [AppComponent, HomepageComponent,UserInformationComponent,  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UsernameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
