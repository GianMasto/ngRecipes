import { TestBed } from '@angular/core/testing';

import { FavritesService } from './favrites.service';

describe('FavritesService', () => {
  let service: FavritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
