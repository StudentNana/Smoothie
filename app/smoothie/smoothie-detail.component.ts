import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie';

@Component({
    selector: 'my-smoothie-detail',
    styleUrls: ['app/smoothie/smoothie-detail.component.css'],
    templateUrl: 'app/smoothie/smoothie-detail.component.html'
})
export class SmoothieDetailComponent {
    @Input() smoothie:Smoothie;
    @Input('details') irgendEinName:string;
    @Output() addObst: EventEmitter<string> = new EventEmitter<string>();

    onKeyUp(value:string){
        this.addObst.emit(value);
    }
}

