System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Smoothie, SMOOTHIES, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Smoothie = (function () {
                function Smoothie() {
                }
                Smoothie = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<h1> Smoothie </h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Smoothie);
                return Smoothie;
            }());
            exports_1("Smoothie", Smoothie);
            // Smoothie Objekt
            SMOOTHIES = [
                { name: 'Apfel', image: 'foto', bewertung: 4, groesse: 200, zutaten: '2 Äpfel, 1 Banane, 1/2 Schale Erdbeeren', zubereitung: ' Waschen, schneiden' },
                { name: 'Banane', image: "foto", bewertung: 5, groesse: 250, zutaten: '1 Banane, 200g Himbeeren', zubereitung: ' Waschen, schneiden' },
                { name: 'Gurke', image: "foto", bewertung: 2, groesse: 200, zutaten: '1 Apfel, 250g Weintrauben', zubereitung: ' Waschen, schneiden' },
                { name: 'Kiwi', image: "foto", bewertung: 8, groesse: 200, zutaten: '3 Kiwi, 2 Äpfel, 1 Banane', zubereitung: ' Waschen, schneiden' },
                { name: 'Orange', image: "foto", bewertung: 6, groesse: 200, zutaten: ' 3 Orangen, 200g Erdbeeren, 1 Äpfel', zubereitung: ' Waschen, schneiden' },
                { name: 'Spinat', image: "foto", bewertung: 4, groesse: 200, zutaten: '50 g Spinat, 1 Löffel Leinenöl,  2 Äpfel', zubereitung: ' Waschen, schneiden' }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Unsere leckere Smoothie';
                    this.smoothies = SMOOTHIES;
                }
                AppComponent.prototype.onSelect = function (smoothie) {
                    this.selectedSmoothie = smoothie;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <ul class=\"smoothies\">\n      <li *ngFor=\"let smoothie of smoothies\"\n        [class.selected]=\"smoothie === selectedSmoothie\"\n        (click)=\"onSelect(smoothie)\">\n        <img src=\"pic/smoothie.jpeg\" class=\"pic\">\n        {{smoothie.name}}\n      </li>\n    </ul>\n   <div *ngIf=\"selectedSmoothie\">\n      <h2>{{selectedSmoothie.name}} Smoothie Rezept! </h2>\n      <div><label>Bewertung: </label>{{selectedSmoothie.bewertung}}</div>\n      <div>\n        <label>Smoothie Name: </label>\n        <input [(ngModel)]=\"selectedSmoothie.name\" placeholder=\"name\"/>\n      </div>\n      <div><label>Groesse in ml: </label>{{selectedSmoothie.groesse}}</div>\n      <div><label>Zutaten: </label>{{selectedSmoothie.zutaten}}</div>x\n      <div><label>Zubereitung: </label>{{selectedSmoothie.zubereitung}}</div>\n    </div>\n  ",
                        styles: ["\n    .selected {\n      background-color: #129bd2 !important;\n      color: white;\n    }\n    .smoothies {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 10px;\n      margin: 10px;\n      width: 90%;\n    }\n    .smoothies .pic{\n       margin-left: 10px 5px 5px 5px;\n       width: 60px;\n       height: 87px;\n    }\n    .smoothies li {\n      display: inline;\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #65d0fb;\n      margin: .5em;\n      padding: .3em 0;\n      height: 100px;\n      border-radius: 4px;\n    }\n    .smoothies li.selected:hover {\n      background-color: #39a0ca !important;\n      color: white;\n    }\n    .smoothies li:hover {\n      color: #607D8B;\n      background-color: #29b0e6;\n      left: .1em;\n    }\n    .smoothies .text {\n      position: relative;\n      top: -3px;\n      padding: 10px;\n    }\n    \n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map