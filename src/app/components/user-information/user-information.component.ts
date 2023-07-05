import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformationService } from 'src/app/services/userinformation.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['user-information.component.scss'],
})
export class UserInformationComponent {
  userName: string = '';

  constructor(
    private userService: UsernameService,
    private userInformation: UserInformationService,
    private router: Router
  ) {
    this.userName = this.userService.username;
  }

  addUserInformation(userInfo: NgForm) {}

  goToPreviusPage() {
    this.router.navigate(['/homepage']);
  }

  goToMainPage(userParam: any) {
    this.userInformation.downloadData(userParam);
    this.router.navigate(['/main']);
  }

  resetForm(formValue: NgForm) {
    formValue.reset();
  }
}
