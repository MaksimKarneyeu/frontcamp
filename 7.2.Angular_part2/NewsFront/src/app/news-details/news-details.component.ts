import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from '../creat-guid';
import { News } from '../news';
import { ActivatedRoute } from '@angular/router';
import { DateUtils } from '../date-utils';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  public message: string;
  private imageBase64: ArrayBuffer | String;
  private currentId: string;
  private operationType: string = "Create";
  public id: FormControl = new FormControl(Guid.newGuid());
  public name: FormControl = new FormControl('', Validators.required);
  public title: FormControl = new FormControl('', Validators.required);
  public description: FormControl = new FormControl('');
  public author: FormControl = new FormControl('');
  public url: FormControl = new FormControl('');
  public urlToImage: FormControl = new FormControl('');
  public publishedAt: FormControl = new FormControl();
  public content: FormControl = new FormControl('', Validators.required);
  public editForm = new FormGroup({
    id: this.id,
    name: this.name,
    description: this.description,
    author: this.author,
    url: this.url,
    urlToImage: this.urlToImage,
    publishedAt: this.publishedAt,
    content: this.content,
    title: this.title
  });

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  public onSubmit() {
    switch (this.operationType) {
      case 'Create':
        this.dataService.addNews(this.mapFormToNews(this.editForm.value));
        alert('News has been created!');
        break;
      case 'Edit':
        this.dataService.updateNews(this.mapFormToNews(this.editForm.value));
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
      this.imageBase64 = reader.result;
    }
  }

  private mapFormToNews(form: any): News {
    let mapped = new News(form.id, form.name);
    mapped.author = form.author;
    mapped.content = form.content;
    mapped.description = form.description;
    mapped.publishedAt = form.publishedAt;
    mapped.title = form.title;
    mapped.url = form.url;
    mapped.urlToImage = form.urlToImage;
    mapped.imageBase64 = this.imageBase64;
    return mapped;
  }

  private mapNewToForm(news: News) {
    if (this.operationType) {
      this.id.setValue(news.source.id);
      this.name.setValue(news.source.name);
      this.description.setValue(news.description);
      this.author.setValue(news.author);
      this.url.setValue(news.url);
      this.urlToImage.setValue(news.urlToImage);    
      this.publishedAt.setValue(DateUtils.parseDate(news.publishedAt));
      this.content.setValue(news.content);
      this.title.setValue(news.title);
      this.imageBase64 = news.imageBase64;
    }
  }

 

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.currentId = params['id'];
      if (this.currentId) {
        this.operationType = 'Edit';
        let news = this.dataService.getNewsById(this.currentId);
        if(!news){  
          await this.dataService.getNews();
        }
        news = this.dataService.getNewsById(this.currentId);
        if (news) {
          this.mapNewToForm(news);
        }
      } else {
        this.publishedAt.setValue(DateUtils.parseDate(new Date()));
      }
      this.dataService.changeSource(this.operationType);
    });
  }
}