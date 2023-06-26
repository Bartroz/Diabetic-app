import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/userinfo.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInformationService {
  userInformation: any = {};

  constructor(private http: HttpClient) {}

  downloadData(param: UserData) {
    return (this.userInformation = {
      gender: param.gender,
      age: param.age,
      height: param.height,
      weight: param.weight,
      comorbidities: param.comorbidities,
      additionalInfo: param.addInfo,
    });
  }

  calculateBMI(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '4b3ba86928msh83cd6a7d580ee08p1b7cddjsn2c4894141241',
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
    });

    return this.http.get(
      `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${this.userInformation.weight}&height=${this.userInformation.height/100}`,
      { headers: headers }
    );
  }
}
