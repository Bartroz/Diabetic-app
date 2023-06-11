import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {

  constructor(private service: UsernameService, private router: Router) {}

  goToNextPage(param:string) {

      this.router.navigate(['/userInformation']);
      return this.service.username = param; 
  }

  addUserName(formValue:NgForm){
    console.log(formValue.value)
    console.log(formValue.valid)
  }
}
