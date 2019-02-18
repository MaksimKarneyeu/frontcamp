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

    getData(): News[] { return this.data; };

    addData(news: News) { this.data.push(news); }

    updateData(id: string, newsToUpdate: News): News {
        this.data = this.data.splice(this.data.findIndex(item => item.source.id === id), 1);
        this.data.push(newsToUpdate);
        return newsToUpdate;
    }
}