import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  private dataService: DataService; 
  @Input() details: DetailsParams;

  public model: News = new News(new Date().getTime().toString(),"");

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }  

  public onSubmit() {       
    switch (this.details.detailsType) {
      case 'Create':
      this.dataService.addNews(this.model);
      alert('News has been created!');
        break;
        case 'Edit':
        this.dataService.updateNews(this.model.source.id, this.model);
        alert('News has been updated!');
        break;
    }
  }

  ngOnInit() {
    this.dataService.changeSource(this.details.title);
    if(this.details.id){
      this.model = this.dataService.getNewsById(this.details.id);
    }     
  }
}
