System.register(["./smoothie/ingredients", "./smoothie/unit"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ingredients_1, unit_1, InMemoryDataService;
    return {
        setters: [
            function (ingredients_1_1) {
                ingredients_1 = ingredients_1_1;
            },
            function (unit_1_1) {
                unit_1 = unit_1_1;
            }
        ],
        execute: function () {
            InMemoryDataService = (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    var smoothies = [
                        { id: 1, name: 'Apfel', image: 'foto', bewertung: 4, groesse: 200, zutaten: ingredients_1.Ingredients[('Apfel', 1, unit_1.Unit.Stueck), ('Orange', 2, unit_1.Unit.Stueck), ('Banane', 3, unit_1.Unit.EL)], zubereitung: ' Waschen, schneiden' },
                        { id: 2, name: 'Banane', image: 'foto', bewertung: 5, groesse: 250, zutaten: '1 Banane, 200g Himbeeren', zubereitung: ' Waschen, schneiden' },
                        { id: 3, name: 'Gurke', image: "foto", bewertung: 2, groesse: 200, zutaten: '1 Apfel, 250g Weintrauben', zubereitung: ' Waschen, schneiden' },
                        { id: 4, name: 'Kiwi', image: "foto", bewertung: 8, groesse: 200, zutaten: '3 Kiwi, 2 Äpfel, 1 Banane', zubereitung: ' Waschen, schneiden' },
                        { id: 5, name: 'Orange', image: "foto", bewertung: 6, groesse: 200, zutaten: ' 3 Orangen, 200g Erdbeeren, 1 Äpfel', zubereitung: ' Waschen, schneiden' },
                        { id: 6, name: 'Spinat', image: "foto", bewertung: 4, groesse: 200, zutaten: '50 g Spinat, 1 Löffel Leinenöl,  2 Äpfel', zubereitung: ' Waschen, schneiden' }
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