import { TestBed } from '@angular/core/testing';

import { BeatCounter } from './beat-counter';

describe('BeatCounter', () => {
  let service: BeatCounter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeatCounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
