import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { OpenLoginPanelService } from "src/app/services/openLoginPanel.service";

@Component({
    selector: 'app-login-panel',
    templateUrl: './loginPanel.component.html',
    styleUrls: ['loginPanel.component.scss']
})

export class loginPanelComponent {

    boolValue:boolean
    private subscription: Subscription

    constructor(
        private loginPanelComponent: OpenLoginPanelService,
        private fb:FormBuilder)
        {
        this.subscription = this.loginPanelComponent.toogleValue$.subscribe((value) => this.boolValue = value)
        }

    
        loginPanel:FormGroup = this.fb.group({
            login: ['',{validators: [
                Validators.required,
                Validators.min(4)
            ]}],
            password: ['', {validators: [
                Validators.required,
                Validators.min(8)
            ]}]
        })
}