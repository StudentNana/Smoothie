/**
 * Service delivering Smoothie data
 * @author  Nana
 */

import { Injectable } from '@angular/core';
import {Smoothie} from "./smoothie";
import { SMOOTHIES } from './smoothies-mockdata';

@Injectable()
export class SmoothieService {
    getSmoothies(): Promise<Smoothie[]> {
        return Promise.resolve(SMOOTHIES);
    }
    getSmoothiesSlowly(): Promise<Smoothie[]> {
        return new Promise<Smoothie[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => { return this.getSmoothies(); });
    }
}