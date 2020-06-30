import { TestBed } from '@angular/core/testing';

import { NewsServiceService } from './news-service.service';

describe('WxServiceService', () => {
  let service: NewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
