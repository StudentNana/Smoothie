import {InMemoryDbService} from "angular-in-memory-web-api";
import {Ingredients} from "./smoothie/ingredients";
import {Unit} from "./smoothie/unit";
import { INGREDIENTS } from "./smoothie/ingredients-mockdata";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let smoothies = [
                { id: 1, name: 'Apfel',    image: 'foto',  bewertung: 4, groesse: 200, zutaten: INGREDIENTS[0], zubereitung: ' Alle Zutaten werden in den Mixer gegeben und bis zur gewünschten Konsistenz gemixt. Die Obstsorten können frei gewählt werden.' },
                { id: 2, name: 'Banane',   image: 'foto',  bewertung: 5, groesse: 250, zutaten: INGREDIENTS[1], zubereitung: ' Die Himbeeren mit dem Joghurt in einen Mixer geben und etwa 1 Min. pürieren, bis alles schön cremig ist. Verwendet man frische Himbeeren, sollten diese gekühlt sein. Den Orangensaft dazu geben und alles nochmals durchmixen. ' },
                { id: 3, name: 'Gurke',    image: "foto",  bewertung: 2, groesse: 200, zutaten: INGREDIENTS[2], zubereitung: ' Obst in einen Mixer geben und etwa 1 Min. pürieren, bis alles schön cremig ist. Verwendet man frische Himbeeren, sollten diese gekühlt sein. Den Orangensaft dazu geben und alles nochmals durchmixen. ' },
                { id: 4, name: 'Kiwi',     image: "foto",  bewertung: 8, groesse: 200, zutaten: INGREDIENTS[3], zubereitung: ' Der Apfel wird geschält und etwas kleiner geschnitten 2.	Alles, Apfel, Brombeeren und Saft in einen Messbecher oder Standmixer geben und pürieren. 3.	Ein Glas zur Hälfte mit dem Brombeerpüree füllen und erstmal beiseite stellen.' },
                { id: 5, name: 'Orange',   image: "foto",  bewertung: 6, groesse: 200, zutaten: INGREDIENTS[4], zubereitung: ' Waschen, schneiden, mixen' },
                { id: 6, name: 'Spinat',   image: "foto",  bewertung: 4, groesse: 200, zutaten: INGREDIENTS[5], zubereitung: ' Waschen, schneiden, mixen' }
        ];
        return {smoothies};
    }
}
