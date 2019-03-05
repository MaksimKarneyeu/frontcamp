import { News } from './news';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CallService } from './call.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private data: News[] = [];
    private source = new BehaviorSubject('All Sources');
    public currentSource = this.source.asObservable();

     constructor(private callService: CallService) {
        
    } 

    public async getNews(count: number = 0) {
        return await this.callService.getNews().then(articles => {
                this.data = articles;
                if(count === 0){                  
                    return this.data;
                }
                return this.sliceNews(this.data, count);
            }           
        );
    }

    public changeSource(source: string) {
        this.source.next(source)
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

    public addNews(news: News) {
        this.callService.createNews(news)
            .subscribe(news => console.log('news has been added'));
    };

    public updateNews(news: News) {
        this.callService.updateNews(news)
            .subscribe(news => console.log('news has been updated'));
    }

    public getNewsById(id: string): News {
        return this.data[this.data.findIndex(item => item.source.id === id)];
    }

    public deleteNews(id: string) {
        this.callService.deleteNews(id).subscribe();
    }

    private sliceNews(data: News[], count: number) {
        if (count > 0 && count < data.length) {
            return data.slice(0, count);
        } else {
            return data;
        }
    }
}