import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

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
  @Output() loadNewsDetailsOutput: EventEmitter<boolean> = new EventEmitter();

  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  public loadNewsDetails():void {
    this.loadNewsDetailsOutput.emit(true);
  } 

  public onSelect(source: string): void {        
    this.dataService.changeSource(source);
  }  

  ngOnInit() {   
    this.sources = this.dataService.getSourceList();    
    this.dataService.currentSource.subscribe(source => this.source = source);
  }
}