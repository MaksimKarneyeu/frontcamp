import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Guid } from './creat-guid';
import config from './config.json';
import { HttpHeaders } from '@angular/common/http';
import { INews } from './inews';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  };
  constructor(private httpClient: HttpClient) {
  }

  public getInternalNews() {
    return this.httpClient.get<INews>(config.externalApiUrl)
      .pipe(
        map((response: any) => {
          return response.articles.map((value: INews) => {
            value.source.id = Guid.newGuid();
            value.isExternal = true;
            return value;
          });
        })
      ).toPromise<INews[]>();
  }

  public getNews() {
    return this.httpClient.get<INews>(`${config.serverUrl}news`)
      .pipe(
        map((response: any) => {
          
          return response.map((value: INews) => {
            value.isExternal = false;
            return value;
          });
        })
      ).toPromise<INews[]>();
  }

  public createNews(news: INews) {
    return this.httpClient.post(`${config.serverUrl}news`, news, this.httpOptions);
  }


  public updateNews(news: INews) {
    return this.httpClient.put(`${config.serverUrl}news/${news.source.id}`, news, this.httpOptions);
  }

  public deleteNews(id: string) {
    return this.httpClient.delete(`${config.serverUrl}news/${id}`);
  }
}