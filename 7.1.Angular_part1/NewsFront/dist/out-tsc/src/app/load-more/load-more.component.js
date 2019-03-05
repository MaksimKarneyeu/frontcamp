import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
var LoadMoreComponent = /** @class */ (function () {
    function LoadMoreComponent() {
        this.loadMoreOutput = new EventEmitter();
    }
    LoadMoreComponent.prototype.ngOnInit = function () {
    };
    LoadMoreComponent.prototype.loadMore = function () {
        var loadMoreCount = 5;
        this.loadMoreOutput.emit(loadMoreCount);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], LoadMoreComponent.prototype, "loadMoreOutput", void 0);
    LoadMoreComponent = tslib_1.__decorate([
        Component({
            selector: 'load-more',
            templateUrl: './load-more.component.html',
            styleUrls: ['./load-more.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoadMoreComponent);
    return LoadMoreComponent;
}());
export { LoadMoreComponent };
//# sourceMappingURL=load-more.component.js.map