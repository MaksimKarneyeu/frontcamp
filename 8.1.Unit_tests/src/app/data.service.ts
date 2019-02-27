import { News } from './news';
import { BehaviorSubject } from 'rxjs';
import { CallService } from "./call.service";
import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    protected data: News[];
    protected source = new BehaviorSubject('All Sources');
    public currentSource = this.source.asObservable();

    constructor(protected callService: CallService, protected dataProvider: DataProviderService) {
        if (!this.data) {
            this.data = this.initData();
        }                
    }

    protected initData(): News[]{
        if (!this.data) {
            this.getExternalNews();
            return this.dataProvider.getData();          
        }
    }

    protected sliceNews(data: News[], count: number) {
        if (count > 0 && count < data.length) {
            return data.slice(0, count);
        } else {
            return data;
        }
    }

    public getExternalNews() {
        this.callService.getNews().subscribe(
            (articles: News[]) => {
                this.data = this.data.concat(articles);
            },
            (error) => console.log(error)
        )
    }

    public changeSource(source: string) {
        this.source.next(source)
    }

    public getNews(count: number = 0): News[] {
        return this.sliceNews(this.data, count);
    }

    public getNewsBySource(source: string, count: number = 0): News[] {
        let gotData = this.data.filter((news: News) => {
            return news.source.name === source
        });
        return this.sliceNews(gotData, count);
    };

    public getSourceList(): string[] {
        return this.data.map(x => x.source.name)
            .filter((value: string, index: number, array: string[]) => {
                return array.indexOf(value) === index
            });
    }

    public addNews(news: News) { this.data.push(news); }

    public updateNews(id: string, newsToUpdate: News): News {
        this.data = this.data.filter((value: News) => { return value.source.id !== id });
        this.data.push(newsToUpdate);
        return newsToUpdate;
    }

    public getNewsById(id: string): News {
        return this.data[this.data.findIndex(item => item.source.id === id)];
    }

    public deleteNews(id: string) {
        this.data = this.data.filter((value: News) => { return value.source.id !== id });
    }    
}