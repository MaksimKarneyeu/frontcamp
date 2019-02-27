import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, term) {
        return value.filter(function (news) {
            return news.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
                || news.description.toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map