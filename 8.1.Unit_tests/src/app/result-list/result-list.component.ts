import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';

@Component({
  selector: 'result',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  @Input() source: string;
  @Input() filterInput: string;
  @Output() loadNewsDetailsOutput: EventEmitter<DetailsParams> = new EventEmitter();  
  @Output() loadNewsOverviewOutput: EventEmitter<string> = new EventEmitter();

  private currentSource: string;
  private defaultLoadCount : number = 5;
  private loadNewsCount: number;
  public news: News[] = [];

  constructor(private dataService: DataService){
  } 

  private renderNews(source: string, count: number = 0) {
    if (source === 'All Sources') {
      this.news = this.dataService.getNews(count);
    } else {
      this.news = this.dataService.getNewsBySource(source,count);
    }
  }

  private getPropCurrentValue(name: string, changes: SimpleChanges) {
    return changes[name].currentValue;
  }

  public loadNewsDetails(id: string):void {
    let details = new DetailsParams();
    details.id = id;
    details.detailsType = "Edit";
    details.title = "Edit News";
    this.loadNewsDetailsOutput.emit(details);
  } 

  public delete(id: string){
    this.dataService.deleteNews(id);
    this.renderNews(this.currentSource, this.loadNewsCount);
  }

  public loadNewsOverview(id: string):void {   
    this.loadNewsOverviewOutput.emit(id);
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
    }
  }

  ngOnInit() {    
    this.loadNewsCount = this.defaultLoadCount;
    this.currentSource = 'All Sources';
    this.news = this.dataService.getNews(this.loadNewsCount);
    this.filterInput = '';
  }
}
