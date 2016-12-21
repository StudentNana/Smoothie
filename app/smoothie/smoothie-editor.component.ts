/**
 * Displays the Hero name for edit and lets use a RestoreService to cancel editing
 * @author Nana
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestoreService } from '../restore.service';
import { Smoothie } from './smoothie';

@Component({
    selector: 'smoothie-editor',
    providers: [RestoreService],
    styleUrls: ['app/smoothie/smoothie-editor.component.css'],
    template: `
        
          <span>Name:</span>
          <input [(ngModel)]="smoothie.name"/>
          <div>
            <button class="cancelBTN" (click)="onSaved()">save</button>
            <button class="saveBTN" (click)="onCanceled()">cancel</button>
          </div>
        `
})
export class SmoothieEditorComponent {
    @Output() canceled = new EventEmitter<Smoothie>();
    @Output() saved = new EventEmitter<Smoothie>();
    constructor(private restoreService: RestoreService<Smoothie>) {}
    @Input()
    set smoothie (smoothie: Smoothie) {
        this.restoreService.setItem(smoothie);
    }
    get smoothie () {
        return this.restoreService.getItem();
    }
    onSaved () {
        this.saved.emit(this.restoreService.getItem());
    }
    onCanceled () {
        this.smoothie = this.restoreService.restoreItem();
        this.canceled.emit(this.smoothie);
    }
}