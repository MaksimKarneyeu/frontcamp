import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';
var NewsComponent = /** @class */ (function () {
    function NewsComponent(dataService) {
        this.dataService = dataService;
        this.sources = [];
        this.loadNewsDetailsOutput = new EventEmitter();
        this.loadNewsOverviewOutput = new EventEmitter();
    }
    NewsComponent.prototype.loadNewsDetails = function (id) {
        var details = new DetailsParams();
        details.id = id;
        details.detailsType = "Create";
        details.title = "Create News";
        this.loadNewsDetailsOutput.emit(details);
    };
    NewsComponent.prototype.loadNewsDetailsEvent = function (event) {
        this.loadNewsDetailsOutput.emit(event);
    };
    NewsComponent.prototype.loadNewsOverviewEvent = function (event) {
        this.loadNewsOverviewOutput.emit(event);
    };
    NewsComponent.prototype.onSelect = function (source) {
        this.dataService.changeSource(source);
    };
    NewsComponent.prototype.getSources = function () {
        this.sources = this.dataService.getSourceList();
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSource.subscribe(function (source) { return _this.source = source; });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NewsComponent.prototype, "loadNewsDetailsOutput", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NewsComponent.prototype, "loadNewsOverviewOutput", void 0);
    NewsComponent = tslib_1.__decorate([
        Component({
            selector: 'news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], NewsComponent);
    return NewsComponent;
}());
export { NewsComponent };
//# sourceMappingURL=news.component.js.map