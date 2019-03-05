import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.css']
})
export class OverviewContainerComponent implements OnInit {
  public newsOverviewId: string;
  constructor() { }

  public loadNewsOverviewEvent(event: string) {   
    this.newsOverviewId = event;
  }

  ngOnInit() {
  }

}
