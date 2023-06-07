import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.scss'],
})
export class HomepageComponent {
  get name(): any {
    return this.service.username;
  }

  set name(value: any) {
    this.service.username = value;
  }

  constructor(private service: UsernameService, private router: Router) {}

  goToNextPage(param:string) {
    
    if(param === ''){
      console.log(param);
      console.log(this.service.isEmpty);
      this.service.isEmpty = true;
    } else {
      this.router.navigate(['/userInformation']);
      this.service.isEmpty = false;
    }

  }
}
