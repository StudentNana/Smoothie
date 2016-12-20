import { Component, OnInit } from '@angular/core';
import { Smoothie } from './smoothie/smoothie';
import { SmoothieService } from './smoothie/smoothie.service'

@Component({
    selector: "my-app",
    template: "<h1> Smoothie </h1>"
})



@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    providers: [SmoothieService]
})

export class AppComponent implements OnInit {
    title: string = "Unsere leckere Smoothies!";
    smoothies: Smoothie [] = null;
    values: string = '';
    selectedSmoothie: Smoothie = null;
    details: string = "Smoothie-Details";
    obst: string;
    hideDetails: boolean = false;

    constructor(private smoothieService:SmoothieService){

    }

    /** Called by AngularJS after constructor and after injected services and child-components are set */
    ngOnInit():void{
        // this.smoothies = this.smoothieService.getSmoothies();
        this.smoothieService
            .getSmoothiesSlowly()
            .then(smoothies => this.smoothies = smoothies);
    }

    /**  assigns an Smoothie to the Component's "selectedSmoothie" property by clicking onto one of the Smoothies, which are listed on
     * the *ngFor-generated smoothie list
     * @param the Smoothie that has been clicked last */
    onSelect(smoothie:Smoothie):void{
        this.selectedSmoothie = smoothie;
        this.hideDetails = false;
    }

    /** function to be toggled on keyUp in template input. Will extend this.values by current input value
     * @param event of input
     */
    /*onKeyUp(event:any) {
        this.values += event.target.value + ' | ';
    }*/
}