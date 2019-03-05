import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Optional } from '@angular/core';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(isLoadNews, isLoadNewsDetails, isLoadNewsOverview) {
        this.title = 'News';
        this.isLoadNews = isLoadNews;
        this.isLoadNewsDetails = isLoadNewsDetails;
        this.isLoadNewsOverview = isLoadNewsOverview;
    }
    ContainerComponent.prototype.loadNewsDetailsEvent = function (event) {
        this.isLoadNewsDetails = true;
        this.isLoadNews = false;
        this.isLoadNewsOverview = false;
        this.details = event;
    };
    ContainerComponent.prototype.loadNewsOverviewEvent = function (event) {
        this.isLoadNewsOverview = true;
        this.isLoadNewsDetails = false;
        this.isLoadNews = false;
        this.newsOverviewId = event;
    };
    ContainerComponent.prototype.ngOnInit = function () {
        if (!this.isLoadNews && !this.isLoadNewsDetails && !this.isLoadNewsOverview) {
            this.isLoadNews = true;
        }
    };
    ContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(1, Optional()), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [Boolean, Boolean, Boolean])
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map