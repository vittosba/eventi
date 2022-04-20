import { TestBed } from '@angular/core/testing';

import { ArtistsEventService } from './artists-event.service';

describe('ArtistsEventService', () => {
  let service: ArtistsEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
