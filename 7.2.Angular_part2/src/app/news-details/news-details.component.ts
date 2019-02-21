import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { DetailsParams } from '../DetailsParams';
import { Guid } from '../creat-guid';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input() details: DetailsParams;

  public editForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    url: new FormControl(''),
    urlToImage: new FormControl(''),
    publishedAt: new FormControl(''),
    content: new FormControl(''),
  });


  constructor(private dataService: DataService) {
  }

  public onSubmit() {
    alert(this.editForm.value);
    switch (this.details.detailsType) {
      case 'Create':
      //  this.dataService.addNews(this.editForm.value);
        alert('News has been created!');
        break;
      case 'Edit':
     //   this.dataService.updateNews(this.model.source.id, this.model);
        alert('News has been updated!');
        break;
    }
  }

  ngOnInit() {
    this.dataService.changeSource(this.details.title);
    if (this.details.id) {
    //  this.model = this.dataService.getNewsById(this.details.id);
    }
  }
}
