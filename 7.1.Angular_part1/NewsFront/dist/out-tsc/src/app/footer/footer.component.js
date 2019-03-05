import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.poweredBy = "Powered by";
        this.newsApiLink = "https://newsapi.org/";
        this.newsApiUri = "NewsApi.org";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib_1.__decorate([
        Component({
            selector: 'footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map