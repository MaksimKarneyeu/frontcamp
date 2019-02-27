import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
import { CallService } from "./call.service";
import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
var DataService = /** @class */ (function () {
    function DataService(callService, dataProvider) {
        this.callService = callService;
        this.dataProvider = dataProvider;
        this.source = new BehaviorSubject('All Sources');
        this.currentSource = this.source.asObservable();
        if (!this.data) {
            this.data = this.dataProvider.getData();
            this.getExternalNews();
        }
    }
    DataService.prototype.getExternalNews = function () {
        var _this = this;
        return this.callService.getNews().subscribe(function (articles) {
            _this.data = _this.data.concat(articles);
        }, function (error) { return console.log(error); });
    };
    DataService.prototype.changeSource = function (source) {
        this.source.next(source);
    };
    DataService.prototype.getNews = function (count) {
        if (count === void 0) { count = 0; }
        return this.sliceNews(this.data, count);
    };
    DataService.prototype.getNewsBySource = function (source, count) {
        if (count === void 0) { count = 0; }
        var gotData = this.data.filter(function (news) {
            return news.source.name === source;
        });
        return this.sliceNews(gotData, count);
    };
    ;
    DataService.prototype.getSourceList = function () {
        return this.data.map(function (x) { return x.source.name; })
            .filter(function (value, index, array) {
            return array.indexOf(value) === index;
        });
    };
    DataService.prototype.addNews = function (news) { this.data.push(news); };
    DataService.prototype.updateNews = function (id, newsToUpdate) {
        this.data = this.data.filter(function (value) { return value.source.id !== id; });
        this.data.push(newsToUpdate);
        return newsToUpdate;
    };
    DataService.prototype.getNewsById = function (id) {
        return this.data[this.data.findIndex(function (item) { return item.source.id === id; })];
    };
    DataService.prototype.deleteNews = function (id) {
        this.data = this.data.filter(function (value) { return value.source.id !== id; });
    };
    DataService.prototype.sliceNews = function (data, count) {
        if (count > 0 && count < data.length) {
            return data.slice(0, count);
        }
        else {
            return data;
        }
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [CallService, DataProviderService])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map