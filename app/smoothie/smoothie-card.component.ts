/**
 * displays a Smoothies name as a card (no editing) for listing
 * @author Nana
 */

import { Component, Input } from '@angular/core';
import { Smoothie } from './smoothie';
@Component({
    selector: 'smoothie-card',
    template: `
        <img src="pic/smoothie.png" class="pic">
        <span>{{smoothie.name}}</span>
        `
})
export class SmoothieCardComponent {
    @Input() smoothie: Smoothie;
}