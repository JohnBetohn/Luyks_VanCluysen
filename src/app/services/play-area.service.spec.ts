import { TestBed, inject } from '@angular/core/testing';

import { PlayAreaService } from './play-area.service';

describe('PlayAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayAreaService]
    });
  });

  it('should be created', inject([PlayAreaService], (service: PlayAreaService) => {
    expect(service).toBeTruthy();
  }));
});
