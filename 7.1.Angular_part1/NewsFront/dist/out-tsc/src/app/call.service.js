import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Config from './config.json';
import { HttpHeaders } from '@angular/common/http';
var CallService = /** @class */ (function () {
    function CallService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    CallService.prototype.getNews = function () {
        return this.httpClient.get(Config.serverUrl + "news")
            .pipe(map(function (response) {
            return response.map(function (value) {
                return value;
            });
        }));
    };
    CallService.prototype.createNews = function (news) {
        return this.httpClient.post(Config.serverUrl + "news", news, this.httpOptions);
    };
    CallService.prototype.updateNews = function (news) {
        return this.httpClient.put(Config.serverUrl + "news/" + news.source.id, news, this.httpOptions);
    };
    CallService.prototype.deleteNews = function (id) {
        return this.httpClient.delete(Config.serverUrl + "news/" + id);
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