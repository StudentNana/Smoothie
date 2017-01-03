/**
 * Displays the Hero name for edit and lets use a RestoreService to cancel editing
 * @author Nana
 */
System.register(["@angular/core", "../restore.service", "./smoothie"], function (exports_1, context_1) {
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
    var core_1, restore_service_1, smoothie_1, SmoothieEditorComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restore_service_1_1) {
                restore_service_1 = restore_service_1_1;
            },
            function (smoothie_1_1) {
                smoothie_1 = smoothie_1_1;
            }
        ],
        execute: function () {/**
             * Displays the Hero name for edit and lets use a RestoreService to cancel editing
             * @author Nana
             */
            SmoothieEditorComponent = (function () {
                function SmoothieEditorComponent(restoreService) {
                    this.restoreService = restoreService;
                    this.canceled = new core_1.EventEmitter();
                    this.saved = new core_1.EventEmitter();
                }
                Object.defineProperty(SmoothieEditorComponent.prototype, "smoothie", {
                    get: function () {
                        return this.restoreService.getItem();
                    },
                    set: function (smoothie) {
                        this.restoreService.setItem(smoothie);
                    },
                    enumerable: true,
                    configurable: true
                });
                SmoothieEditorComponent.prototype.onSaved = function () {
                    this.saved.emit(this.restoreService.getItem());
                };
                SmoothieEditorComponent.prototype.onCanceled = function () {
                    this.smoothie = this.restoreService.restoreItem();
                    this.canceled.emit(this.smoothie);
                };
                return SmoothieEditorComponent;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], SmoothieEditorComponent.prototype, "canceled", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], SmoothieEditorComponent.prototype, "saved", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", smoothie_1.Smoothie),
                __metadata("design:paramtypes", [smoothie_1.Smoothie])
            ], SmoothieEditorComponent.prototype, "smoothie", null);
            SmoothieEditorComponent = __decorate([
                core_1.Component({
                    selector: 'smoothie-editor',
                    providers: [restore_service_1.RestoreService],
                    styleUrls: ['app/smoothie/smoothie-editor.component.css'],
                    template: "\n        \n          <span>Name:</span>\n          <input [(ngModel)]=\"smoothie.name\"/>\n          <div>\n            <button class=\"cancelBTN\" (click)=\"onSaved()\">save</button>\n            <button class=\"saveBTN\" (click)=\"onCanceled()\">cancel</button>\n          </div>\n        "
                }),
                __metadata("design:paramtypes", [restore_service_1.RestoreService])
            ], SmoothieEditorComponent);
            exports_1("SmoothieEditorComponent", SmoothieEditorComponent);
        }
    };
});
//# sourceMappingURL=smoothie-editor.component.js.map