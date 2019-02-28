import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsParams } from '../DetailsParams';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Guid } from '../creat-guid';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input() details: DetailsParams;
  
  public id: FormControl = new FormControl(Guid.newGuid());
  public name: FormControl = new FormControl('', Validators.required);
  public description: FormControl = new FormControl('');
  public author: FormControl = new FormControl('');
  public url: FormControl = new FormControl('');
  public urlToImage: FormControl = new FormControl('');
  public publishedAt: FormControl = new FormControl();
  public content: FormControl = new FormControl('');
  public editForm = new FormGroup({
    id: this.id,    
    name: this.name,
    description: this.description,
    author: this.author,
    url: this.url,
    urlToImage: this.urlToImage,
    publishedAt: this.publishedAt,
    content: this.content
  });

  constructor(private dataService: DataService) {
    this.details = new DetailsParams();
  }

  public onSubmit() {  
    switch (this.details.detailsType) {
      case "Create":
        this.dataService.addNews(this.editForm.value);          
        alert('News has been created!');
        break;
      case "Edit":        
        this.dataService.updateNews(this.editForm.value.id, this.editForm.value);  
        alert('News has been updated!');        
        break;
    }
  }

  ngOnInit() {
    this.dataService.changeSource(this.details.title);

    if (this.details.id) {
      let editable = this.dataService.getNewsById(this.details.id);
      this.id.setValue(editable.source.id);
      this.name.setValue(editable.source.name);
      this.description.setValue(editable.description);
      this.author.setValue(editable.author);
      this.url.setValue(editable.url);
      this.urlToImage.setValue(editable.urlToImage);
      this.publishedAt.setValue(editable.publishedAt);
      this.content.setValue(editable.content);
    }
  }
}
