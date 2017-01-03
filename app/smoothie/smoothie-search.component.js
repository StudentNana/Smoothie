System.register(['@angular/core', "./smoothie-search.service", 'rxjs/Observable', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, smoothie_search_service_1, Observable_1, Subject_1;
    var SmoothieSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (smoothie_search_service_1_1) {
                smoothie_search_service_1 = smoothie_search_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            SmoothieSearchComponent = (function () {
                function SmoothieSearchComponent(smoothieSearchService) {
                    this.smoothieSearchService = smoothieSearchService;
                    this.searchTerms = new Subject_1.Subject();
                    this.showDetails = new core_1.EventEmitter();
                }
                SmoothieSearchComponent.prototype.ngOnInit = function () {
                    this.initSmoothies();
                };
                SmoothieSearchComponent.prototype.initSmoothies = function () {
                    var _this = this;
                    this.smoothies = this.searchTerms
                        .debounceTime(300) // wait for 300ms pause in events
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(function (term) { return term // switch to new observable each time
                        ? _this.smoothieSearchService.search(term)
                        : Observable_1.Observable.of([]); })
                        .catch(function (error) {
                        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                };
                SmoothieSearchComponent.prototype.search = function (term) {
                    this.searchTerms.next(term);
                };
                SmoothieSearchComponent.prototype.gotoDetail = function (smoothie) {
                    //onSelect(smoothie);
                    this.smoothies = Observable_1.Observable.of([]);
                    this.initSmoothies();
                    this.showDetails.emit(smoothie);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SmoothieSearchComponent.prototype, "showDetails", void 0);
                SmoothieSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-search',
                        templateUrl: 'app/smoothie/smoothie-search.component.html',
                        styleUrls: ['app/smoothie/smoothie-search.component.css'],
                        providers: [smoothie_search_service_1.SmoothieSearchService]
                    }), 
                    __metadata('design:paramtypes', [smoothie_search_service_1.SmoothieSearchService])
                ], SmoothieSearchComponent);
                return SmoothieSearchComponent;
            }());
            exports_1("SmoothieSearchComponent", SmoothieSearchComponent);
        }
    }
});
//# sourceMappingURL=smoothie-search.component.js.map