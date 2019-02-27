import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Guid } from './creat-guid';
import { News } from './news';
import newsData from './news.json';
var DataProviderService = /** @class */ (function () {
    function DataProviderService() {
    }
    DataProviderService.prototype.getData = function () {
        return newsData.map(function (n) {
            var news = new News(Guid.newGuid(), n.source.name);
            news.title = n.title;
            news.author = n.author;
            news.description = n.description;
            news.url = n.url;
            news.urlToImage = n.urlToImage;
            news.publishedAt = n.publishedAt;
            news.content = n.content;
            return news;
        });
    };
    DataProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataProviderService);
    return DataProviderService;
}());
export { DataProviderService };
//# sourceMappingURL=data-provider.service.js.map