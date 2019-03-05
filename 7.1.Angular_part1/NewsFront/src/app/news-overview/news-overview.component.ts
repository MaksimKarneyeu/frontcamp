import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.css']
})
export class NewsOverviewComponent implements OnInit {  
  public model: News;
  public isNewsDeleted: boolean;
  @Input() newsOverviewId: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.dataService = dataService;    
  }  

  public delete(id: string) {
    this.dataService.deleteNews(id);
    this.isNewsDeleted = true;
  }

  ngOnInit() {
      this.route.params.subscribe(params => {  
      this.model = this.dataService.getNewsById(params['id']);    
      this.dataService.changeSource(this.model.source.name);
    });
  }
}
