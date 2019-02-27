import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';
var NewsOverviewComponent = /** @class */ (function () {
    function NewsOverviewComponent(dataService) {
        this.dataService = dataService;
        this.loadNewsDetailsOutput = new EventEmitter();
    }
    NewsOverviewComponent.prototype.loadNewsDetails = function (id) {
        var details = new DetailsParams();
        details.id = id;
        details.detailsType = "Edit";
        details.title = "Edit News";
        this.loadNewsDetailsOutput.emit(details);
    };
    NewsOverviewComponent.prototype.delete = function (id) {
        this.dataService.deleteNews(id);
        this.isNewsDeleted = true;
    };
    NewsOverviewComponent.prototype.ngOnInit = function () {
        this.model = this.dataService.getNewsById(this.newsOverviewId);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsOverviewComponent.prototype, "newsOverviewId", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], NewsOverviewComponent.prototype, "loadNewsDetailsOutput", void 0);
    NewsOverviewComponent = tslib_1.__decorate([
        Component({
            selector: 'news-overview',
            templateUrl: './news-overview.component.html',
            styleUrls: ['./news-overview.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], NewsOverviewComponent);
    return NewsOverviewComponent;
}());
export { NewsOverviewComponent };
//# sourceMappingURL=news-overview.component.js.map