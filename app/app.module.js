System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "@angular/http", "angular-in-memory-web-api", "./in-memory-data.service", "./rxjs-extensions", "./smoothie/smoothie.service", "./smoothie/smoothie.module", "./restore.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, app_component_1, http_1, angular_in_memory_web_api_1, in_memory_data_service_1, smoothie_service_1, smoothie_module_1, restore_service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular_in_memory_web_api_1_1) {
                angular_in_memory_web_api_1 = angular_in_memory_web_api_1_1;
            },
            function (in_memory_data_service_1_1) {
                in_memory_data_service_1 = in_memory_data_service_1_1;
            },
            function (_1) {
            },
            function (smoothie_service_1_1) {
                smoothie_service_1 = smoothie_service_1_1;
            },
            function (smoothie_module_1_1) {
                smoothie_module_1 = smoothie_module_1_1;
            },
            function (restore_service_1_1) {
                restore_service_1 = restore_service_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                        smoothie_module_1.SmoothieModule
                    ],
                    declarations: [
                        app_component_1.AppComponent
                    ],
                    providers: [smoothie_service_1.SmoothieService, restore_service_1.RestoreService],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map