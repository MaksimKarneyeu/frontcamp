import { News } from './news';
import newsData from './news.json';


export class DataService {

    private data: News[];

    constructor() {
        this.data = newsData.map((n: any) => {
            let news = new News(n.source.id, n.source.name);
            news.author = n.author;
            news.description = n.description;
            news.url = n.url;
            news.urlToImage = n.urlToImage;
            news.publishedAt = n.publishedAt;
            news.content = n.content;
            return news;
        });
    }

    public getNews(): News[] { return this.data; }

    public getNewsBySource(source: string): News[] {
        return this.data.filter((news: News) => {
            return news.source.name === source
        });
    };

    public getSourceList(): string[] {
        return this.data.map(x => x.source.name)
            .filter((value: string, index: number, array: string[]) => {
                return array.indexOf(value) === index
            })
    }

    public addNews(news: News) { this.data.push(news); }

    public updateNews(id: string, newsToUpdate: News): News {
        this.data = this.data.splice(this.data.findIndex(item => item.source.id === id), 1);
        this.data.push(newsToUpdate);
        return newsToUpdate;
    }
}