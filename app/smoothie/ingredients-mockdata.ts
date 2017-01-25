/**
 * Mockup data of Smoothies
 * @author Nana
 */

import { Ingredients } from './ingredients';
import {Unit} from "./unit";

export const INGREDIENTS: Ingredients[] = [
    { name: 'Apfel', measure: 5, unit: Unit.kg},
    { name: 'Gurke', measure: 6, unit: Unit.kg},
    { name: 'Gurke', measure: 3, unit: Unit.g},
    { name: 'Kiwi',   measure: 2, unit: Unit.Stueck},
    { name: 'Orange', measure: 4, unit: Unit.Stueck},
    { name: 'Spinat', measure: 5, unit: Unit.TL}
];