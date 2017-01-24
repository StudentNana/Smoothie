import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie';
import {RestoreService} from "../restore.service";
import { SmoothieService } from "./smoothie.service";
import { FormGroup} from '@angular/forms';
import {EditItem} from "../edit-item";

@Component({
    selector: 'my-smoothie-detail',
    styleUrls: ['app/smoothie/smoothie-detail.component.css'],
    templateUrl: 'app/smoothie/smoothie-detail.component.html',
})
export class SmoothieDetailComponent {
    @Input() smoothie: Smoothie;
    @Output() canceled = new EventEmitter<Smoothie>();
    @Output() saved = new EventEmitter<Smoothie>();

    smoothieForm: FormGroup;

    constructor( private smoothieService: SmoothieService, private restoreService: RestoreService<Smoothie>){
    }

    onSaved(updatedSmoothie: Smoothie) {
        this.smoothieService.update(updatedSmoothie);
        console.log("save");
    }

    onCanceled(smoothie) {
        this.smoothie = this.restoreService.restoreItem();
        this.canceled.emit(this.smoothie);
        console.log("cancel");
    }
}

