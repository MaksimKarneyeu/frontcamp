import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { News } from '../news';
import { Guid } from '../create.guid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  public model: News = new News(Guid.newGuid(), '');
  public message: string;
  private id: string;
  private operationType: string = "Create";
  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  public onSubmit() {
    switch (this.operationType) {
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

  public preview(files) {
    if (files.length === 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.model.imageBase64 = reader.result;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.operationType = 'Edit';
        let news = this.dataService.getNewsById(this.id);
        if (!news) {
          this.dataService.getNews();
        }
        this.model = news;
      } else {
        this.model.publishedAt = new Date();
      }
      this.dataService.changeSource(this.operationType);
    });
  }
}