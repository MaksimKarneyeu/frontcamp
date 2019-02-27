import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from '../creat-guid';
var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent(dataService) {
        this.dataService = dataService;
        this.id = new FormControl(Guid.newGuid());
        this.name = new FormControl('', Validators.required);
        this.description = new FormControl('');
        this.author = new FormControl('');
        this.url = new FormControl('');
        this.urlToImage = new FormControl('');
        this.publishedAt = new FormControl();
        this.content = new FormControl('');
        this.editForm = new FormGroup({
            id: this.id,
            name: this.name,
            description: this.description,
            author: this.author,
            url: this.url,
            urlToImage: this.urlToImage,
            publishedAt: this.publishedAt,
            content: this.content
        });
    }
    NewsDetailsComponent.prototype.onSubmit = function () {
        switch (this.details.detailsType) {
            case "Create":
                this.dataService.addNews(this.editForm.value);
                alert('News has been created!');
                break;
            case "Edit":
                this.dataService.updateNews(this.editForm.value.id, this.editForm.value);
                alert('News has been updated!');
                break;
        }
    };
    NewsDetailsComponent.prototype.ngOnInit = function () {
        this.dataService.changeSource(this.details.title);
        if (this.details.id) {
            var editable = this.dataService.getNewsById(this.details.id);
            this.id.setValue(editable.source.id);
            this.name.setValue(editable.source.name);
            this.description.setValue(editable.description);
            this.author.setValue(editable.author);
            this.url.setValue(editable.url);
            this.urlToImage.setValue(editable.urlToImage);
            this.publishedAt.setValue(editable.publishedAt);
            this.content.setValue(editable.content);
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
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());
export { NewsDetailsComponent };
//# sourceMappingURL=news-details.component.js.map