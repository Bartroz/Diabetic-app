import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/interfaces/userinfo.interface';
import { UserInformationService } from 'src/app/services/userinformation.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent implements OnInit {

  userData: UserData = 
  {
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    comorbidities: '',
  };

  username: string = '';

  constructor
  (
    private userInfo: UserInformationService,
    private userName: UsernameService
  ) 
  {}

  ngOnInit(): void 
  {
    this.userData = {
      gender: this.userInfo.userInformation.gender,
      age: this.userInfo.userInformation.age,
      height: this.userInfo.userInformation.height,
      weight: this.userInfo.userInformation.weight,
      comorbidities: this.userInfo.userInformation.comorbidities,
    };

    this.username = this.userName.username;
  }

}
