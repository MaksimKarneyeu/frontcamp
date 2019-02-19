import { Component, OnInit } from '@angular/core';
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


  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  public onSelect(source: string): void {        
    this.dataService.changeSource(source);
  }  

  ngOnInit() {   
    this.sources = this.dataService.getSourceList();    
    this.dataService.currentSource.subscribe(source => this.source = source);
  }
}