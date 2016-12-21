import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie';

@Component({
    selector: 'my-smoothie-detail',
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

