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
                { name: 'Apfel', measure: 5, unit: unit_1.Unit.kg },
                { name: 'Gurke', measure: 6, unit: unit_1.Unit.kg },
                { name: 'Gurke', measure: 3, unit: unit_1.Unit.g },
                { name: 'Kiwi', measure: 2, unit: unit_1.Unit.Stueck },
                { name: 'Orange', measure: 4, unit: unit_1.Unit.Stueck },
                { name: 'Spinat', measure: 5, unit: unit_1.Unit.TL }
            ]);
        }
    };
});
//# sourceMappingURL=ingredients-mockdata.js.map