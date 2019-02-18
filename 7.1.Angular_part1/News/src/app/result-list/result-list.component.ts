import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {News} from '../news';

@Component({
  selector: 'result',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [DataService]
})
export class ResultListComponent implements OnInit {
  private dataService: DataService;
  public news: News[] = [];

  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  ngOnInit() {
    this.news = this.dataService.getData();
  }
}
