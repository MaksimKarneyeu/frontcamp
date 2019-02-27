import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CallService } from './call.service';
import * as config from './config.json';
describe('CallServiceService', function () {
    var http;
    var service;
    var expectedData = {
        "source": {
            "id": "23353352",
            "name": "Hackernoon.com"
        },
        "author": "FlatOutCrypto",
        "title": "Save the ICO",
        "description": "ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…",
        "url": "https://hackernoon.com/save-the-ico-34287dbbce03",
        "urlToImage": "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
        "publishedAt": "2019-02-13T13:31:01Z",
        "content": "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
    };
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [CallService]
        });
        service = TestBed.get(CallService);
        http = TestBed.get(HttpTestingController);
    });
    afterEach(function () {
        http.verify();
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should have made one request to GET data from news api', function () {
        var api = config.api;
        var methodType = 'GET';
        service.getNews().subscribe(function (data) {
            expect(data).toEqual(expectedData);
        });
        var req = http.expectOne(api);
        expect(req.request.method).toEqual(methodType);
        req.flush(expectedData);
    });
});
//# sourceMappingURL=call.service.spec.js.map