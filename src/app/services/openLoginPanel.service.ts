import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OpenLoginPanelService {

    private toggleValue: Subject<boolean> = new Subject<boolean>
    toogleValue$: Observable<boolean> = this.toggleValue.asObservable()

    constructor(){}

    changeBoolValue(value:boolean) {
        this.toggleValue.next(value)
    }
    
}