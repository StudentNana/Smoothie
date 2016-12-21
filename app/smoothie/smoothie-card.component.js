/**
 * displays a Smoothies name as a card (no editing) for listing
 * @author Nana
 */
System.register(['@angular/core', './smoothie'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, smoothie_1;
    var SmoothieCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (smoothie_1_1) {
                smoothie_1 = smoothie_1_1;
            }],
        execute: function() {
            SmoothieCardComponent = (function () {
                function SmoothieCardComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', smoothie_1.Smoothie)
                ], SmoothieCardComponent.prototype, "smoothie", void 0);
                SmoothieCardComponent = __decorate([
                    core_1.Component({
                        selector: 'smoothie-card',
                        template: "\n        <span>Name:</span>\n        <span>{{smoothie.name}}</span>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SmoothieCardComponent);
                return SmoothieCardComponent;
            }());
            exports_1("SmoothieCardComponent", SmoothieCardComponent);
        }
    }
});
//# sourceMappingURL=smoothie-card.component.js.map