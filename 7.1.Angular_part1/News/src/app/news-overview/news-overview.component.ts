import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';

@Component({
  selector: 'news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {
  private dataService: DataService;
  public model: News;
  public isNewsDeleted: boolean;
  @Input() newsOverviewId: string;
  @Output() loadNewsDetailsOutput: EventEmitter<DetailsParams> = new EventEmitter();

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  public loadNewsDetails(id: string): void {   
    let details = new DetailsParams();
    details.id = id;
    details.detailsType = "Edit";
    details.title = "Edit News";
    this.loadNewsDetailsOutput.emit(details);
  }

  public delete(id: string) {
    this.dataService.deleteNews(id);
    this.isNewsDeleted = true;
  }

  ngOnInit() {
    this.model = this.dataService.getNewsById(this.newsOverviewId);    
  }
}
