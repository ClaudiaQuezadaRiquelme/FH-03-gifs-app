import { TestBed } from '@angular/core/testing';

import { GifsProviderService } from './gifs-provider.service';

describe('GifsProviderService', () => {
  let service: GifsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
