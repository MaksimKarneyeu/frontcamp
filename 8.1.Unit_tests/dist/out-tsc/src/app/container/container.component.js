import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.title = 'News';
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
        this.isLoadNews = true;
    };
    ContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        })
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map