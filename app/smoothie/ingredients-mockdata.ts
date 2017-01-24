/**
 * Mockup data of Smoothies
 * @author Nana
 */

import { Ingredients } from './ingredients';
import {Unit} from "./unit";

export const INGREDIENTS: Ingredients[] = [
    { id: 1, name: 'Apfel', measure: 2, unit: Unit.kg},
    { id: 2, name: 'Banane', measure: 2, unit: Unit.kg},
    { id: 3, name: 'Gurke', measure: 2, unit: Unit.g},
    { id: 4, name: 'Kiwi',   measure: 2, unit: Unit.Stueck},
    { id: 5, name: 'Orange', measure: 2, unit: Unit.Stueck},
    { id: 6, name: 'Spinat', measure: 2, unit: Unit.TL}
];