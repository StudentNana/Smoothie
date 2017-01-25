System.register(["@angular/core", "./smoothie/smoothie.service", "./edit-item"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, smoothie_service_1, edit_item_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (smoothie_service_1_1) {
                smoothie_service_1 = smoothie_service_1_1;
            },
            function (edit_item_1_1) {
                edit_item_1 = edit_item_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(smoothieService) {
                    this.smoothieService = smoothieService;
                    this.title = "Unsere leckere Smoothies!";
                    this.values = '';
                    this.selectedSmoothie = null;
                    this.showNewSmoothie = false;
                }
                /** Called by AngularJS after constructor and after injected services and child-components are set */
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.smoothieService
                        .getSmoothies()
                        .then(function (smoothies) {
                        _this.smoothies = smoothies.map(function (item) { return new edit_item_1.EditItem(item); });
                    });
                };
                AppComponent.prototype.add = function (name) {
                    var _this = this;
                    name = name.trim();
                    if (!name) {
                        return;
                    }
                    this.smoothieService.create(name)
                        .then(function (smoothie) {
                        _this.smoothies.push(new edit_item_1.EditItem(smoothie));
                        _this.selectedSmoothie = null;
                        _this.showNewSmoothie = false;
                    });
                };
                AppComponent.prototype.delete = function (smoothie) {
                    var _this = this;
                    this.smoothieService
                        .delete(smoothie.id)
                        .then(function () {
                        _this.smoothies = _this.smoothies.filter(function (h) { return h.item !== smoothie; });
                        if (_this.selectedSmoothie === smoothie) {
                            _this.selectedSmoothie = null;
                        }
                    });
                };
                AppComponent.prototype.onSelect = function (smoothie) {
                    this.selectedSmoothie = smoothie;
                    this.showNewSmoothie = false;
                };
                AppComponent.prototype.onAddSmoothie = function () {
                    this.selectedSmoothie = null;
                    this.showNewSmoothie = true;
                };
                AppComponent.prototype.cancelAddSmoothie = function () {
                    this.showNewSmoothie = false;
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    styleUrls: ['app/app.component.css'],
                    templateUrl: 'app/app.component.html'
                }),
                __metadata("design:paramtypes", [smoothie_service_1.SmoothieService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map