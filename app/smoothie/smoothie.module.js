System.register(['@angular/core', '@angular/common', '@angular/forms', './smoothie-detail.component', './smoothie-editor.component', './smoothie-card.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, smoothie_detail_component_1, smoothie_editor_component_1, smoothie_card_component_1;
    var SmoothieModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (smoothie_detail_component_1_1) {
                smoothie_detail_component_1 = smoothie_detail_component_1_1;
            },
            function (smoothie_editor_component_1_1) {
                smoothie_editor_component_1 = smoothie_editor_component_1_1;
            },
            function (smoothie_card_component_1_1) {
                smoothie_card_component_1 = smoothie_card_component_1_1;
            }],
        execute: function() {
            SmoothieModule = (function () {
                function SmoothieModule() {
                }
                SmoothieModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, forms_1.FormsModule],
                        declarations: [
                            smoothie_detail_component_1.SmoothieDetailComponent,
                            smoothie_editor_component_1.SmoothieEditorComponent,
                            smoothie_card_component_1.SmoothieCardComponent
                        ],
                        exports: [smoothie_detail_component_1.SmoothieDetailComponent, smoothie_card_component_1.SmoothieCardComponent, smoothie_editor_component_1.SmoothieEditorComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SmoothieModule);
                return SmoothieModule;
            }());
            exports_1("SmoothieModule", SmoothieModule);
        }
    }
});
//# sourceMappingURL=smoothie.module.js.map