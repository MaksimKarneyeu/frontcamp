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
  public news: News[] = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  private renderNews(source: string) {
    if (source === 'All Sources') {
      this.news = this.dataService.getNews();
    } else {
      this.news = this.dataService.getNewsBySource(source);
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

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'source') {
        this.currentSource = this.getPropCurrentValue(propName, changes);
        this.renderNews(this.currentSource);
      }
      if (propName === 'filterInput') {      
        let cur = this.getPropCurrentValue(propName, changes);       
        if (!cur) {
          this.renderNews(this.currentSource);
        } else {         
          this.filterNews(cur);
        }
      }
    }
  }

  ngOnInit() {
    this.currentSource = 'All Sources';
    this.news = this.dataService.getNews();
  }
}
