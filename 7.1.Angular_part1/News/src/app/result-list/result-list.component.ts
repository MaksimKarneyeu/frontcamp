import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';

@Component({
  selector: 'result',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  @Input() source: string;
  @Input() filterInput: string;

  private dataService: DataService;
  private currentSource: string;
  private defaultLoadCount : number = 5;
  private loadNewsCount: number;
  public news: News[] = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  private renderNews(source: string, count: number = 0) {
    if (source === 'All Sources') {
      this.news = this.dataService.getNews(count);
    } else {
      this.news = this.dataService.getNewsBySource(source,count);
    }
  }

  private filterNews(term: string) {
    this.news = this.news.filter((news) => {
      return news.description.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        || news.source.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
  }

  private getPropCurrentValue(name: string, changes: SimpleChanges) {
    return changes[name].currentValue;
  }

  public handleLoadMore(event: number){
    this.loadNewsCount += event;
    this.renderNews(this.currentSource, this.loadNewsCount);  
  } 

  ngOnChanges(changes: SimpleChanges) {   
    for (let propName in changes) {
      if (propName === 'source') {
        this.loadNewsCount = this.defaultLoadCount;
        this.currentSource = this.getPropCurrentValue(propName, changes);
        this.renderNews(this.currentSource, this.loadNewsCount);
      }
      if (propName === 'filterInput') {      
        let cur = this.getPropCurrentValue(propName, changes);       
        if (!cur) {
          this.renderNews(this.currentSource, this.loadNewsCount);
        } else {         
          this.filterNews(cur);
        }
      }
    }
  }

  ngOnInit() {    
    this.loadNewsCount = this.defaultLoadCount;
    this.currentSource = 'All Sources';
    this.news = this.dataService.getNews(this.loadNewsCount);
  }
}
