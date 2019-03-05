import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
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

  private currentSource: string;
  private defaultLoadCount: number = 5;
  private loadNewsCount: number;
  public news: News[] = [];

  constructor(private dataService: DataService) {  
  }

  private async renderNews(source: string, count: number = 0) {
    if (source === 'All Sources') {
      this.news = await this.dataService.getNews(count);
    } else {
      this.news = this.dataService.getNewsBySource(source, count);
    }   
  }  

  private filterNews(term: string) {
    this.news = this.news.filter((news) => {
      return news.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        || news.description.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
  }

  private getPropCurrentValue(name: string, changes: SimpleChanges) {
    return changes[name].currentValue;
  }  

  public delete(id: string) {    
    this.dataService.deleteNews(id); 
    this.news = this.news.filter((value: News) => { return value.source.id !== id });
  }  

  public handleLoadMore(event: number) {
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

  async ngOnInit() {
    this.loadNewsCount = this.defaultLoadCount;
    this.currentSource = 'All Sources';
    this.dataService.changeSource(this.currentSource);
    this.news = await this.dataService.getNews(this.loadNewsCount);
  }
}