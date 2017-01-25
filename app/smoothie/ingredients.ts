import { Unit } from './unit';
import { Component, OnInit } from '@angular/core';
import {Smoothie} from "./smoothie";
import { INGREDIENTS } from "./ingredients-mockdata";
import {IngredientsService} from "./ingredients.service";



@Component({
    selector: 'ingredients-details',
    styleUrls: ['app/smoothie/ingredients.css'],
    templateUrl: 'app/smoothie/ingredients.html',
    providers: [IngredientsService]
})

export class Ingredients {
    name: string;
    measure: number;
    unit: Unit;
}

export class Container implements OnInit {

    ingredients: Ingredients[] = null;

    constructor(private ingredientsService: IngredientsService) {
    }

    ngOnInit(): void {
        this.ingredients = this.ingredientsService.getIngredients();
    }



}