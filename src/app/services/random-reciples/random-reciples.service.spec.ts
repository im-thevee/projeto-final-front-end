import { TestBed } from '@angular/core/testing';

import { RandomReciplesService } from './random-reciples.service';

describe('RandomReciplesService', () => {
  let service: RandomReciplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomReciplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
