import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from './news';
import { Guid } from './creat-guid';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private newsApiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e80c4b9ce1b45d1a1e69e81bfe6fe51';
  constructor(private httpClient: HttpClient) {
  }


  public getNews() {
    return this.httpClient.get<News>(this.newsApiUrl)
      .pipe(
        map((response: any) => {
          return response.articles.map((value: News) => {
            value.source.id = Guid.newGuid();
            return value;
          });
        })
      );
  }
}
