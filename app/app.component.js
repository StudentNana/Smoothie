System.register(['@angular/core', './smoothie.service'], function(exports_1, context_1) {
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
    var core_1, smoothie_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (smoothie_service_1_1) {
                smoothie_service_1 = smoothie_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(smoothieService) {
                    this.smoothieService = smoothieService;
                    this.title = "Unsere leckere Smoothies!";
                    this.smoothies = null;
                    this.values = '';
                    this.selectedSmoothie = null;
                    this.details = "Smoothie-Details";
                    this.hideDetails = false;
                }
                /** Called by AngularJS after constructor and after injected services and child-components are set */
                AppComponent.prototype.ngOnInit = function () {
                    this.smoothies = this.smoothieService.getSmoothies();
                };
                /**  assigns an Smoothie to the Component's "selectedSmoothie" property by clicking onto one of the Smoothies, which are listed on
                 * the *ngFor-generated smoothie list
                 * @param the Smoothie that has been clicked last */
                AppComponent.prototype.onSelect = function (smoothie) {
                    this.selectedSmoothie = smoothie;
                    this.hideDetails = false;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<h1> Smoothie </h1>"
                    }),
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/app.component.css'],
                        templateUrl: 'app/app.component.html',
                        providers: [smoothie_service_1.SmoothieService]
                    }), 
                    __metadata('design:paramtypes', [smoothie_service_1.SmoothieService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map