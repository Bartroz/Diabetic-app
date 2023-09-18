import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValueService } from 'src/app/services/form-value.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  isEmpty: boolean = false;

  constructor(
    private userService: UsernameService,
    private formService: FormValueService,
    private router: Router
  ) {}

  goToNextPage(userName: string, formValid: any): string {
    if (formValid.valid) {
      this.formService.getFormValue(true);
      this.router.navigate(['/userInformation']);
    } else {
      this.formService.getFormValue(false);
      console.log('form not is valid');
    }
    return (this.userService.username = userName);
  }

  addUserName(formValue: NgForm) {}
}
