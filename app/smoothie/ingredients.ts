import { Unit } from './unit';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Smoothie} from "./smoothie";


@Component({
    selector: 'ingredients-details',
    styleUrls: ['app/smoothie/ingredients.css'],
    templateUrl: 'app/smoothie/ingredients.html'
})

export class Ingredients {
    id: number;
    name: string;
    measure: number;
    unit: Unit;

}