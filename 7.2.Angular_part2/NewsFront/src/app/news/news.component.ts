import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit { 
  public sources: string[] = [];
  public source: string;
  public filterInput: string; 
  public isCreatedByMe: boolean;

  constructor(private dataService: DataService){  
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