import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsOverviewComponent } from './news-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DetailsParams } from '../DetailsParams';

describe('NewsOverviewComponent', () => {
  let component: NewsOverviewComponent;
  let fixture: ComponentFixture<NewsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsOverviewComponent],
      imports: [
        HttpClientTestingModule,
      ], schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadNewsDetailsOutput should pass details params to parent component', () => {
    component.loadNewsDetailsOutput.subscribe((load: DetailsParams) => {
      expect(load.detailsType).toEqual('Edit');
      expect(load.title).toEqual('Edit News');
    });
    component.loadNewsDetails("test");
  });
});
