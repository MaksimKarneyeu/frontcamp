import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from './news';
import { Guid } from './create.guid';
import Config from './config.json';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getNews() {
    return this.httpClient.get<News>(`${Config.serverUrl}news`)
      .pipe(
        map((response: any) => {
          return response.map((value: News) => {
            return value;
          });
        })
      ).toPromise<News[]>();
  }

  public createNews(news: News) {
    return this.httpClient.post(`${Config.serverUrl}news`, news, this.httpOptions);
  }


  public updateNews(news: News) {
    return this.httpClient.put(`${Config.serverUrl}news/${news.source.id}`, news, this.httpOptions);
  }

  public deleteNews(id: string) {
    return this.httpClient.delete(`${Config.serverUrl}news/${id}`);
  }
}