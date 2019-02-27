import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';
var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(dataService) {
        this.dataService = dataService;
        this.loadNewsDetailsOutput = new EventEmitter();
        this.loadNewsOverviewOutput = new EventEmitter();
        this.defaultLoadCount = 5;
        this.news = [];
    }
    ResultListComponent.prototype.renderNews = function (source, count) {
        if (count === void 0) { count = 0; }
        if (source === 'All Sources') {
            this.news = this.dataService.getNews(count);
        }
        else {
            this.news = this.dataService.getNewsBySource(source, count);
        }
    };
    ResultListComponent.prototype.getPropCurrentValue = function (name, changes) {
        return changes[name].currentValue;
    };
    ResultListComponent.prototype.loadNewsDetails = function (id) {
        var details = new DetailsParams();
        details.id = id;
        details.detailsType = "Edit";
        details.title = "Edit News";
        this.loadNewsDetailsOutput.emit(details);
    };
    ResultListComponent.prototype.delete = function (id) {
        this.dataService.deleteNews(id);
        this.renderNews(this.currentSource, this.loadNewsCount);
    };
    ResultListComponent.prototype.loadNewsOverview = function (id) {
        this.loadNewsOverviewOutput.emit(id);
    };
    ResultListComponent.prototype.handleLoadMore = function (event) {
        this.loadNewsCount += event;
        this.renderNews(this.currentSource, this.loadNewsCount);
    };
    ResultListComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === 'source') {
                this.loadNewsCount = this.defaultLoadCount;
                this.currentSource = this.getPropCurrentValue(propName, changes);
                this.renderNews(this.currentSource, this.loadNewsCount);
            }
        }
    };
    ResultListComponent.prototype.ngOnInit = function () {
        this.loadNewsCount = this.defaultLoadCount;
        this.currentSource = 'All Sources';
        this.news = this.dataService.getNews(this.loadNewsCount);
        this.filterInput = '';
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ResultListComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ResultListComponent.prototype, "filterInput", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ResultListComponent.prototype, "loadNewsDetailsOutput", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ResultListComponent.prototype, "loadNewsOverviewOutput", void 0);
    ResultListComponent = tslib_1.__decorate([
        Component({
            selector: 'result',
            templateUrl: './result-list.component.html',
            styleUrls: ['./result-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ResultListComponent);
    return ResultListComponent;
}());
export { ResultListComponent };
//# sourceMappingURL=result-list.component.js.map