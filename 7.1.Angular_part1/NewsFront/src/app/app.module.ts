import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultListComponent } from './result-list/result-list.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { DataService } from './data.service';
import { LoadMoreComponent } from './load-more/load-more.component';
import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { ContainerComponent } from './container/container.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultListComponent,
    NewsComponent,
    NewsDetailsComponent,
    LoadMoreComponent,
    NewsOverviewComponent,
    ContainerComponent,
    DetailsContainerComponent,
    OverviewContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }



