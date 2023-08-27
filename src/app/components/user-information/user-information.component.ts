import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userName = this.userService.username;
  }

  userInfomationForm: FormGroup = this.fb.group({
    gender: ['', { validators: [Validators.required] }],
    age: [
      '',
      {
        validators: [
          Validators.required,
          Validators.min(13),
          Validators.max(100),
        ],
      },
    ],
    height: [
      '',
      {
        validators: [
          Validators.required,
          Validators.min(80),
          Validators.max(300),
        ],
      },
    ],
    weight: [
      '',
      {
        validators: [
          Validators.required,
          Validators.min(40),
          Validators.max(300),
        ],
      },
    ],
    comorbidities: ['', { validators: [Validators.required] }],
  });

  addUserInformation(userInfo: NgForm) {}

  goToPreviusPage() {
    this.router.navigate(['/homepage']);
  }

  goToMainPage(userParam: any) {
    this.userInformation.downloadData(userParam);
    this.router.navigate(['/main']);
  }


  resetForm() {
    this.userInfomationForm.reset();
  }
}
