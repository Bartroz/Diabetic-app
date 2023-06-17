import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/userinfo.interface';

@Injectable()
export class UserInformationService {
  userInformation: any = {};

  downloadData(param: UserData) {
   return this.userInformation = {
      gender: param.gender,
      age: param.age,
      height: param.height,
      weight: param.weight,
      comorbidities: param.comorbidities,
    };
  }
}
