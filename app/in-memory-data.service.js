System.register(["./smoothie/ingredients-mockdata"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ingredients_mockdata_1, InMemoryDataService;
    return {
        setters: [
            function (ingredients_mockdata_1_1) {
                ingredients_mockdata_1 = ingredients_mockdata_1_1;
            }
        ],
        execute: function () {
            InMemoryDataService = (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    var smoothies = [
                        { id: 1, name: 'Apfel', image: 'foto', bewertung: 4, groesse: 200, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Alle Zutaten werden in den Mixer gegeben und bis zur gewünschten Konsistenz gemixt. Die Obstsorten können frei gewählt werden.' },
                        { id: 2, name: 'Banane', image: 'foto', bewertung: 5, groesse: 250, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Die Himbeeren mit dem Joghurt in einen Mixer geben und etwa 1 Min. pürieren, bis alles schön cremig ist. Verwendet man frische Himbeeren, sollten diese gekühlt sein. Den Orangensaft dazu geben und alles nochmals durchmixen. ' },
                        { id: 3, name: 'Gurke', image: "foto", bewertung: 2, groesse: 200, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Obst in einen Mixer geben und etwa 1 Min. pürieren, bis alles schön cremig ist. Verwendet man frische Himbeeren, sollten diese gekühlt sein. Den Orangensaft dazu geben und alles nochmals durchmixen. ' },
                        { id: 4, name: 'Kiwi', image: "foto", bewertung: 8, groesse: 200, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Der Apfel wird geschält und etwas kleiner geschnitten 2.	Alles, Apfel, Brombeeren und Saft in einen Messbecher oder Standmixer geben und pürieren. 3.	Ein Glas zur Hälfte mit dem Brombeerpüree füllen und erstmal beiseite stellen.' },
                        { id: 5, name: 'Orange', image: "foto", bewertung: 6, groesse: 200, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Waschen, schneiden, mixen' },
                        { id: 6, name: 'Spinat', image: "foto", bewertung: 4, groesse: 200, zutaten: ingredients_mockdata_1.INGREDIENTS, zubereitung: ' Waschen, schneiden, mixen' }
                    ];
                    return { smoothies: smoothies };
                };
                return InMemoryDataService;
            }());
            exports_1("InMemoryDataService", InMemoryDataService);
        }
    };
});
//# sourceMappingURL=in-memory-data.service.js.map