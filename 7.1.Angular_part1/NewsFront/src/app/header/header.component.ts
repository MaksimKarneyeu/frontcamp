import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public source: string = '';
  constructor(private dataService: DataService)  {   
    this.dataService.currentSource.subscribe(source => this.source = source); 
  }
  ngOnInit() {  
   
  }
}