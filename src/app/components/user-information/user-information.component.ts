import { Component } from '@angular/core';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['user-information.component.scss'],
})
export class UserInformationComponent {
  userName: string = '';

  constructor(
    private userService: UsernameService
    ) 
    {
        this.userName = this.userService.username
    }
}
