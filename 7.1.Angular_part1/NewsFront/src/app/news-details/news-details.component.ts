import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';
import { Guid } from '../create.guid';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  private dataService: DataService; 
  @Input() details: DetailsParams;

  public model: News = new News(Guid.newGuid(),'');

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
        this.dataService.updateNews(this.model);
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
