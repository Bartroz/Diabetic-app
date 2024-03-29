import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
import { BlsValueService } from 'src/app/services/bls-value.service';
import { UserInformationService } from 'src/app/services/userinformation.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['summary.component.scss'],
  animations: [
    trigger('toggleButton', [
      state(
        'open',
        style({
          height: '40px',
          width: '150px',
          borderRadius: '8px',
        })
      ),
      state(
        'close',
        style({ height: '35px', width: '135px', borderRadius: '5px' })
      ),
      transition('open <=> close', [animate('1s')]),
    ]),
  ],
})
export class SummaryComponent {
  @ViewChild('paragraph') paragraph: ElementRef;

  container: any[] = [];

  isFilled: boolean = true;
  isClicked: any;
  toggle: boolean = false;

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
    private blsValue: BlsValueService,
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
    this.toggle = !this.toggle;

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
    }, 1000);
  }

  openBlsLevelPopup() {
    this.isClicked = this.blsValue.setBool(true);
  }
}
