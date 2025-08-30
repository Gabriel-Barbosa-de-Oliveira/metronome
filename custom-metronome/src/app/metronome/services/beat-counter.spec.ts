import { TestBed } from '@angular/core/testing';

import { BeatCounter } from './beat-counter';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BeatCounter', () => {
  let service: BeatCounter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(BeatCounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("shoud create beat based on time signature", () => {

  })
});
