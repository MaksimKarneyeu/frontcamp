import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';
import { Guid } from '../create.guid';
import { Router } from '@angular/router';
var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.model = new News(Guid.newGuid(), '');
        this.router.navigate(['/details']);
    }
    NewsDetailsComponent.prototype.onSubmit = function () {
        switch (this.details.detailsType) {
            case 'Create':
                this.dataService.addNews(this.model);
                alert('News has been created!');
                break;
            case 'Edit':
                this.dataService.updateNews(this.model);
                alert('News has been updated!');
                break;
        }
    };
    NewsDetailsComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.model.imageBase64 = reader.result;
        };
    };
    NewsDetailsComponent.prototype.ngOnInit = function () {
        this.dataService.changeSource(this.details.title);
        if (this.details.id) {
            this.model = this.dataService.getNewsById(this.details.id);
        }
        else {
            this.model.publishedAt = new Date();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DetailsParams)
    ], NewsDetailsComponent.prototype, "details", void 0);
    NewsDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'news-details',
            templateUrl: './news-details.component.html',
            styleUrls: ['./news-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());
export { NewsDetailsComponent };
//# sourceMappingURL=news-details.component.js.map