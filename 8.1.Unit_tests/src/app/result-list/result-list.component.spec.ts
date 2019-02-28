import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultListComponent } from './result-list.component';
import { FormsModule } from '@angular/forms';
import { PipeMainModule } from '../pipe-main/pipe-main.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsParams } from '../DetailsParams';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultListComponent', () => {

  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultListComponent],
      imports: [FormsModule, PipeMainModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]    
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
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
