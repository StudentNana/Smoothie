import { Injectable } from '@angular/core';
import {Ingredients} from './ingredients';
import { INGREDIENTS } from './ingredients-mockdata';

@Injectable()
export class IngredientsService {
    getIngredients(): Ingredients[] {
        return INGREDIENTS;
    }
}