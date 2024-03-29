import { Component, inject } from '@angular/core';
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
  private userService = inject(UsernameService)
  private formService = inject(FormValueService)
  private router = inject(Router)

canNavigate: boolean = true
  isEmpty: boolean = false;

  constructor(
    // private router: Router
  ) {}

  goToNextPage(userName: string, formValid: boolean | any): string {
    if (formValid.valid as boolean) {
      this.canNavigate = true
      this.router.navigate(['/userInformation']);
    } else {
      this.canNavigate = false
    }
    return (this.userService.username = userName);
  }

  addUserName(formValue: NgForm) {}
}
