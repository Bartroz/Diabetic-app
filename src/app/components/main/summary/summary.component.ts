import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  bmiColor: string = '';

  username: string = '';

  constructor(
    private userInfo: UserInformationService,
    private userName: UsernameService,
    private http: HttpClient
  ) {
    let isBmiCorrect;
  }

  ngOnInit(): any {
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

  calculateBmi() {
    let isBmiCorrect: boolean = false;
    this.userInfo.calculateBMI().subscribe(
      (response) => {
        console.log(response);
        this.bmi = response.bmi.toFixed(3);
        console.log(this.bmi);
      },
      (err) => console.log(err)
    );

    setTimeout(() => {
      if (this.bmi < 18.5) {
        this.bmiColor = 'red';
        isBmiCorrect = false;
      } else if (this.bmi > 18.5 && this.bmi < 24.99) {
        this.bmiColor = 'green';
        isBmiCorrect = false;
      } else if (this.bmi >= 25) {
        this.bmiColor = 'red';
        isBmiCorrect = false;
      }
      console.log(this.bmi);
    }, 1000);
  }
}
