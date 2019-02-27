import { TestBed } from '@angular/core/testing';
import { CallService } from './call.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { News } from './news';
import { DataProviderService } from './data-provider.service';
import { DataServiceStub } from './data.service.stub';


describe('CallServiceService', () => {

    const expectedData: News[] = [{
        source: {
            id: "EXTERNAL1",
            name: "EXTERNAL1"
        },
        author: "FlatOutCrypto",
        title: "EXTERNAL",
        description: "ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…",
        url: "https://hackernoon.com/save-the-ico-34287dbbce03",
        urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
        publishedAt: new Date("2019-02-13T13:31:01Z"),
        content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
    }, {
        source: {
            id: "EXTERNAL2",
            name: "EXTERNAL2"
        },
        author: "FlatOutCrypto",
        title: "EXTERNAL",
        description: "ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…",
        url: "https://hackernoon.com/save-the-ico-34287dbbce03",
        urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
        publishedAt: new Date("2019-02-13T13:31:01Z"),
        content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
    }];

    let newNews: News = {
        source: {
            id: "EXTERNAL3",
            name: "EXTERNAL3"
        },
        author: "FlatOutCrypto",
        title: "EXTERNAL",
        description: "ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…",
        url: "https://hackernoon.com/save-the-ico-34287dbbce03",
        urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
        publishedAt: new Date("2019-02-13T13:31:01Z"),
        content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
    };

    let dataService: DataServiceStub;
    let callServiceSpy: jasmine.SpyObj<CallService>;
    let dataProviderServiceSpy: jasmine.SpyObj<DataProviderService>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                DataServiceStub,
                { provide: CallService, useValue: callServiceSpy },
                { provide: DataProviderService, useValue: dataProviderServiceSpy },
                { provide: Array, useValue: expectedData }
            ]
        });

        dataService = TestBed.get(DataServiceStub);
    });

    it('should be created', () => {
        expect(dataService).toBeTruthy();
    });

    it('getNews should return expected news data', () => {
        expect(dataService.getNews()).toEqual(expectedData);
    });

    it('getNewsById should return expected data by news id', () => {
        let expectedFirstNews: News = expectedData[0];
        expect(dataService.getNewsById(expectedFirstNews.source.id)).toEqual(expectedFirstNews);
    });

    it('getSourceList should return expected sources list', () => {   
        let expectedSources = expectedData.map((news)=>{
            return news.source.name;
        });
        expect(dataService.getSourceList()).toEqual(expectedSources);
    });

    it('addNews should return one more news when adding new news', () => {          

        let expectedNewsWithNewNews = expectedData.concat(newNews);        

        dataService.addNews(newNews);      

        expect(dataService.getNews()).toEqual(expectedNewsWithNewNews);
    });  
    
    it('deleteNews should return one less news when deleting new news', () => {          

        let newsToDelete: News = expectedData[0];   
        let expectedNews: News = expectedData[1];   

        dataService.deleteNews(newsToDelete.source.id);      

        expect(dataService.getNews()).toEqual([expectedNews]);
    });    

    it('getNewsBySource should return news by source name', () => { 

        let expectedNews: News = expectedData[0];        

        expect(dataService.getNewsBySource(expectedNews.source.name)).toEqual([expectedNews]);
    }); 

    it('updateNews should return updated news after editing', () => { 

        let expectedNews: News = expectedData[0];    

        expectedNews.author = "test";
        
        expect(dataService.updateNews(expectedNews.source.id, expectedNews)).toEqual(expectedNews);
        expect(dataService.getNewsById(expectedNews.source.id)).toEqual(expectedNews);
    });    
});
