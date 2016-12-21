import { Component, OnInit } from '@angular/core';
import { Smoothie } from './smoothie/smoothie';
import { SmoothieService } from './smoothie/smoothie.service'
import {EditItem} from "./edit-item";

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    title: string = "Unsere leckere Smoothies!";
    smoothies: Array<EditItem<Smoothie>>;
    values: string = '';
    selectedSmoothie: Smoothie = null;
    details: string = "Smoothie-Details";

    constructor(private smoothieService:SmoothieService){

    }

    /** Called by AngularJS after constructor and after injected services and child-components are set */

    ngOnInit(): void {
        // this.heroes = this.heroService.getHeroes();
        this.smoothieService
            .getSmoothiesSlowly()
            .then(smoothies => {
            this.smoothies = smoothies.map(item => new EditItem(item));
        });
    }

    onSaved (editItem: EditItem<Smoothie>, updatedSmoothie: Smoothie) {
        editItem.item = Object.assign(editItem.item, updatedSmoothie);
        editItem.editing = false;
    }
    onCanceled (editItem: EditItem<Smoothie>) {
        editItem.editing = false;
    }

    /**  assigns an Smoothie to the Component's "selectedSmoothie" property by clicking onto one of the Smoothies, which are listed on
     * the *ngFor-generated smoothie list
     * @param the Smoothie that has been clicked last */
    onSelect(smoothie:Smoothie):void{
        this.selectedSmoothie = smoothie;
    }
}