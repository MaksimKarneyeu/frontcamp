import { News } from './news';
import newsData from './news.json';
import { BehaviorSubject } from 'rxjs';


export class DataService {

    private data: News[];
    private source = new BehaviorSubject('All Sources');
    public currentSource = this.source.asObservable();

    constructor() {
        if (!this.data) {
            this.data = newsData.map((n: any) => {
                let news = new News(n.source.id, n.source.name);
                news.title = n.title;
                news.author = n.author;
                news.description = n.description;
                news.url = n.url;
                news.urlToImage = n.urlToImage;
                news.publishedAt = n.publishedAt;
                news.content = n.content;
                return news;
            }
            );
        }
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

    public getNewsById(id: string): News{
        return this.data[this.data.findIndex(item => item.source.id === id)];
    }

    public deleteNews(id: string) {
        this.data = this.data.filter((value: News) => { return value.source.id !== id });
    }

    private sliceNews(data: News[], count: number) {
        if (count > 0 && count < data.length) {
            return data.slice(0, count);
        } else {
            return data;
        }
    }
}