import { Injectable } from '@angular/core';
import { Guid } from './creat-guid';
import { News } from './news';
import newsData from './news.json';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() {
  }

  public getData(): News[] {
    return newsData.map((n: any) => {
      let news = new News(Guid.newGuid(), n.source.name);
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
