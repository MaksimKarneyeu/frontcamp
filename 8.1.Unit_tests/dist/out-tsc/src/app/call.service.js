import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Guid } from './creat-guid';
import * as config from './config.json';
var CallService = /** @class */ (function () {
    function CallService(httpClient) {
        this.httpClient = httpClient;
        this.newsApiUrl = config.api;
    }
    CallService.prototype.getNews = function () {
        return this.httpClient.get(this.newsApiUrl)
            .pipe(map(function (response) {
            return response.articles.map(function (value) {
                value.source.id = Guid.newGuid();
                return value;
            });
        }));
    };
    CallService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CallService);
    return CallService;
}());
export { CallService };
//# sourceMappingURL=call.service.js.map