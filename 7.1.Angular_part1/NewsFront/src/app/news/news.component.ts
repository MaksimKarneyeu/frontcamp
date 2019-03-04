import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private dataService: DataService;
  public sources: string[] = [];
  public source: string;
  public filterInput: string;
  @Output() loadNewsDetailsOutput: EventEmitter<DetailsParams> = new EventEmitter();
  @Output() loadNewsOverviewOutput: EventEmitter<string> = new EventEmitter();

  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  public loadNewsDetails(id: string):void {
    let details = new DetailsParams();
    details.id = id;
    details.detailsType = "Create";
    details.title = "Create News";
    this.loadNewsDetailsOutput.emit(details);
  } 
  
  public loadNewsDetailsEvent(event: DetailsParams){
    this.loadNewsDetailsOutput.emit(event);
  }  

  public loadNewsOverviewEvent(event: string){
    this.loadNewsOverviewOutput.emit(event);
  } 

  public onSelect(source: string): void {        
    this.dataService.changeSource(source);
  }  
  public getSources(){
    this.sources = this.dataService.getSourceList();    
  }

  ngOnInit() {       
    this.dataService.currentSource.subscribe(source => this.source = source);
  }
}