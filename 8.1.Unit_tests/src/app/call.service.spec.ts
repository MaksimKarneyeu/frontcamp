import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CallService } from './call.service';
import * as config from './config.json';

describe('CallServiceService', () => {

  let http: HttpTestingController;
  let service: CallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [CallService]
    });

    service = TestBed.get(CallService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have made one request to GET data from news api', () => {
    const api = config.api;
    const methodType = 'GET';

    service.getNews().subscribe((data) => {
      expect(data).toBeNull();
    });

    const req = http.expectOne(api);
    expect(req.request.method).toEqual(methodType);
  });

});
