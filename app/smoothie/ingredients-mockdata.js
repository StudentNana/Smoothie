/**
 * Mockup data of Smoothies
 * @author Nana
 */
System.register(["./unit"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var unit_1, INGREDIENTS;
    return {
        setters: [
            function (unit_1_1) {
                unit_1 = unit_1_1;
            }
        ],
        execute: function () {/**
             * Mockup data of Smoothies
             * @author Nana
             */
            exports_1("INGREDIENTS", INGREDIENTS = [
                { id: 1, name: 'Apfel', measure: 2, unit: unit_1.Unit.kg },
                { id: 2, name: 'Banane', measure: 2, unit: unit_1.Unit.kg },
                { id: 3, name: 'Gurke', measure: 2, unit: unit_1.Unit.g },
                { id: 4, name: 'Kiwi', measure: 2, unit: unit_1.Unit.Stueck },
                { id: 5, name: 'Orange', measure: 2, unit: unit_1.Unit.Stueck },
                { id: 6, name: 'Spinat', measure: 2, unit: unit_1.Unit.TL }
            ]);
        }
    };
});
//# sourceMappingURL=ingredients-mockdata.js.map