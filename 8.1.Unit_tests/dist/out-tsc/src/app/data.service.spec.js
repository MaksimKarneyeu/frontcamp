import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CallServiceService', function () {
    var expectedData = {
        source: {
            id: "EXTERNAL",
            name: "EXTERNAL"
        },
        author: "FlatOutCrypto",
        title: "EXTERNAL",
        description: "ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…",
        url: "https://hackernoon.com/save-the-ico-34287dbbce03",
        urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
        publishedAt: new Date("2019-02-13T13:31:01Z"),
        content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
    };
    var service;
    var callService;
    var dataProviderService;
    var dataProviderServiceStub = {
        getData: function () { }
    };
    var callServiceStub = {};
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [DataService, { provide: callService, useValue: callServiceStub },
                { provide: dataProviderService, useValue: dataProviderServiceStub }]
        });
        service = TestBed.get(DataService);
    });
    fit('should be created', function () {
        expect(service).toBeTruthy();
    });
    fit('getNews should return data with external', function () {
        var a = service.getNews();
        console.log(a);
    });
});
//# sourceMappingURL=data.service.spec.js.map