import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from './news';
import { Guid } from './creat-guid';
import { Observable } from 'rxjs';
import * as config from './config.json';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private newsApiUrl: string = config.api;
  constructor(private httpClient: HttpClient) {
  }
  
  public getNews(): Observable<any> {
    return this.httpClient.get<News>(this.newsApiUrl)
      .pipe(
        map((response: any) => {
          try {
            return response.articles.map((value: News) => {
              try {
                value.source.id = Guid.newGuid();
              } catch (e) {
                value.source.id ='';
              }           
              return value;
            });
          } catch (e) {
          return {};
          }
         
        })
      );
  }
}
