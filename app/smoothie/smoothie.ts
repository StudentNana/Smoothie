import { Ingredients } from './ingredients';

export class Smoothie {
    id: number;
    name: string;
    image: string;
    bewertung: number;
    groesse: number;
    zutaten: Ingredients[];
    zubereitung: string;
}