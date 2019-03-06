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
  public id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  public delete(id: string) {
    this.dataService.deleteNews(id);
    this.isNewsDeleted = true;
  }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params['id'];
      this.model = this.dataService.getNewsById(this.id);
      if (!this.model) {
        await this.dataService.getNews();
      }
      this.model = this.dataService.getNewsById(this.id);
      this.dataService.changeSource(this.model && this.model.source ?
        this.model.source.name : 'News');
    });
  }
}
