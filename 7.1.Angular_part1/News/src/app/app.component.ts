import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public isLoadNewsDetails: boolean;
  public isLoadNews: boolean;
  public title = 'News';

  loadNewsDetails(event: boolean){
   if(event){
     this.isLoadNewsDetails = true;
     this.isLoadNews = false;
   }
  }  

  ngOnInit() {    
    this.isLoadNews = true;
  }
}
