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
    var SmoothieDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (smoothie_1_1) {
                smoothie_1 = smoothie_1_1;
            }],
        execute: function() {
            SmoothieDetailComponent = (function () {
                function SmoothieDetailComponent() {
                    this.addObst = new core_1.EventEmitter();
                }
                SmoothieDetailComponent.prototype.onKeyUp = function (value) {
                    this.addObst.emit(value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', smoothie_1.Smoothie)
                ], SmoothieDetailComponent.prototype, "smoothie", void 0);
                __decorate([
                    core_1.Input('details'), 
                    __metadata('design:type', String)
                ], SmoothieDetailComponent.prototype, "irgendEinName", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SmoothieDetailComponent.prototype, "addObst", void 0);
                SmoothieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-smoothie-detail',
                        templateUrl: 'app/smoothie/smoothie-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SmoothieDetailComponent);
                return SmoothieDetailComponent;
            }());
            exports_1("SmoothieDetailComponent", SmoothieDetailComponent);
        }
    }
});
//# sourceMappingURL=smoothie-detail.component.js.map