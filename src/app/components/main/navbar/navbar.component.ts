import { Component } from "@angular/core";
import { OpenLoginPanelService } from "src/app/services/openLoginPanel.service";
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {

    toggleValue:boolean = false;
    
    constructor(private loginPanelService:OpenLoginPanelService){}

    showLoginPanel(){
        this.loginPanelService.changeBoolValue(this.toggleValue)
    }


}
