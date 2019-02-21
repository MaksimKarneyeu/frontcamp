import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private dataService: DataService;
  public source: string;

  constructor(dataService: DataService) {   
    this.dataService = dataService;  
  }

  ngOnInit() {
    this.dataService.currentSource.subscribe(source => this.source = source);
  }
}
