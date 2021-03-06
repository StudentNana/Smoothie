/**
 * Service delivering Smoothie data
 * @author  Nana
 */
System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, SmoothieService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {/**
             * Service delivering Smoothie data
             * @author  Nana
             */
            SmoothieService = (function () {
                function SmoothieService(http) {
                    this.http = http;
                    this.smoothieUrl = 'app/smoothies';
                    this.smoothieUrlApi = 'http://localhost:3100/smoothies';
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                }
                SmoothieService.prototype.getSmoothies = function () {
                    return this.http.get(this.smoothieUrl)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                SmoothieService.prototype.getSmoothiesSlowly = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        return setTimeout(resolve, 2000);
                    }) // delay 2 seconds
                        .then(function () { return _this.getSmoothies(); });
                };
                SmoothieService.prototype.getSmoothie = function (id) {
                    var url = this.smoothieUrl + "/" + id;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                SmoothieService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                SmoothieService.prototype.update = function (smoothie) {
                    var url = this.smoothieUrl + "/" + smoothie.id;
                    return this.http
                        .put(url, JSON.stringify(smoothie), { headers: this.headers })
                        .toPromise()
                        .then(function () { return smoothie; })
                        .catch(this.handleError);
                };
                SmoothieService.prototype.create = function (name) {
                    return this.http
                        .post(this.smoothieUrl, JSON.stringify({ name: name }), { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                SmoothieService.prototype.delete = function (id) {
                    var url = this.smoothieUrl + "/" + id;
                    return this.http.delete(url, { headers: this.headers })
                        .toPromise()
                        .then(function () { return null; })
                        .catch(this.handleError);
                };
                SmoothieService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                return SmoothieService;
            }());
            SmoothieService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], SmoothieService);
            exports_1("SmoothieService", SmoothieService);
        }
    };
});
//# sourceMappingURL=smoothie.service.js.map