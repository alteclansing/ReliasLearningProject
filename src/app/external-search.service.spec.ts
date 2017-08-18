import { TestBed, inject } from '@angular/core/testing';

import { ExternalSearchService } from './external-search.service';

describe('ExternalSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalSearchService]
    });
  });

  it('should be created', inject([ExternalSearchService], (service: ExternalSearchService) => {
    expect(service).toBeTruthy();
  }));
});
