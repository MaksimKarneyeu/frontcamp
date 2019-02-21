import { OnInit, Component } from '@angular/core';
import { DetailsParams } from '../DetailsParams';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public isLoadNewsDetails: boolean;
  public isLoadNews: boolean;
  public isLoadNewsOverview: boolean;  
  public details: DetailsParams;  
  public newsOverviewId: string;
  public title = 'News';

  public loadNewsDetailsEvent(event: DetailsParams){
    this.isLoadNewsDetails = true;
    this.isLoadNews = false;   
    this.isLoadNewsOverview = false;
    this.details = event;
  }  

  public loadNewsOverviewEvent(event: string){
    this.isLoadNewsOverview = true;
    this.isLoadNewsDetails = false;
    this.isLoadNews = false;   
    this.newsOverviewId = event;
  }  

  ngOnInit() {    
    this.isLoadNews = true;
  }
}