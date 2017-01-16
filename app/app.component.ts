import { Component, OnInit } from '@angular/core';
import { Smoothie } from './smoothie/smoothie';
import { SmoothieService } from './smoothie/smoothie.service';
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
    showNewSmoothie: boolean = false;

    constructor(private smoothieService: SmoothieService) {

    }

    /** Called by AngularJS after constructor and after injected services and child-components are set */

    ngOnInit(): void {
        this.smoothieService
            .getSmoothies()
            .then(smoothies => {
            this.smoothies = smoothies.map(item => new EditItem(item));
        });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.smoothieService.create(name)
            .then(smoothie => {
                this.smoothies.push(new EditItem(smoothie));
                this.selectedSmoothie = null;
                this.showNewSmoothie = false;
            });
    }
    delete(smoothie: Smoothie): void {
        this.smoothieService
            .delete(smoothie.id)
            .then(() => {
                this.smoothies = this.smoothies.filter(h => h.item !== smoothie);
                if (this.selectedSmoothie === smoothie) { this.selectedSmoothie = null; }
            });
    }
    onSelect(smoothie: Smoothie): void {
        this.selectedSmoothie = smoothie;
        this.showNewSmoothie = false;
    }
    onAddSmoothie(): void {
        this.selectedSmoothie = null;
        this.showNewSmoothie = true;
    }
    cancelAddSmoothie(): void {
        this.showNewSmoothie = false;
    }

}
