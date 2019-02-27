import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsOverviewComponent } from './news-overview.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NewsOverviewComponent', () => {
  let component: NewsOverviewComponent;
  let fixture: ComponentFixture<NewsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOverviewComponent ],
      imports: [
        HttpClientTestingModule,
    ]        
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
});
