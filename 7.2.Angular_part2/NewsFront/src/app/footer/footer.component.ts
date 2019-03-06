import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public poweredBy: string;
  public newsApiLink: string;
  public newsApiUri: string;

  constructor() { 
    this.poweredBy = "Powered by";
    this.newsApiLink = "https://newsapi.org/";
    this.newsApiUri = "NewsApi.org";
  }
    
  ngOnInit() {
  }
}
