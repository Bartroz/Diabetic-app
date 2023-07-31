import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariableBinding } from '@angular/compiler';
import {
  Component,
  ElementRef,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('paragraph') paragraph: ElementRef;

  popups: number[] = [];
  blsValue: number[] = [];
  blsDate: [] = [];
  blsTime: [] = [];

  isFilled: boolean = true;
  isClicked: boolean = false;

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
  isBmiCorrect: boolean = false;

  username: string = '';

  constructor(
    private userInfo: UserInformationService,
    private userName: UsernameService,
    private http: HttpClient
  ) {}

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
        this.bmi = response.bmi.toFixed(3);
      },
      (err) => console.log(err)
    );

    setTimeout(() => {
      if (this.bmi < 18.5) {
        this.bmiColor = 'red';
        this.isBmiCorrect = false;
      } else if (this.bmi > 18.5 && this.bmi < 24.99) {
        this.bmiColor = 'green';
        this.isBmiCorrect = true;
      } else if (this.bmi >= 25) {
        this.bmiColor = 'red';
        this.isBmiCorrect = false;
      }
      console.log(this.bmi);
    }, 1000);
  }

  openBlsLevelPopup() {
    this.isClicked = !this.isClicked;
  }

  submitBlsLeve(userParam: any) {
    console.log(userParam);
    console.log(userParam.number);
    this.popups.push(this.popups.length);
  }

  cancelAddBlsLevel() {
    this.isClicked = false;
  }

  addBlsLevel(formValue: NgForm) {}
}
