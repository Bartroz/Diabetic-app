import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserData } from 'src/app/interfaces/userinfo.interface';
import { UserInformationService } from 'src/app/services/userinformation.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['summary.component.scss'],
})
export class SummaryComponent {
  isFilled: boolean = true;

  userData: UserData = {
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    comorbidities: '',
    addInfo: '',
  };

  bmi: number = 0;

  username: string = '';

  constructor(
    private userInfo: UserInformationService,
    private userName: UsernameService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userData = {
      gender: this.userInfo.userInformation.gender,
      age: this.userInfo.userInformation.age,
      height: this.userInfo.userInformation.height,
      weight: this.userInfo.userInformation.weight,
      comorbidities: this.userInfo.userInformation.comorbidities,
      addInfo: this.userInfo.userInformation.additionalInfo,
    };

    this.username = this.userName.username;

    if (this.userData.addInfo?.length == 0) {
      this.isFilled = false;
    }
  }

  calculateBMI(): number {
    return (this.bmi = this.userData.height / this.userData.weight);
  }
}
