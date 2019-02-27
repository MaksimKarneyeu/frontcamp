import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSource.subscribe(function (source) { return _this.source = source; });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map