import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metronome } from './metronome';
import { provideZonelessChangeDetection } from '@angular/core';
import { Header } from '../../../shared/components/header/header';

describe('Metronome', () => {
  let component: Metronome;
  let fixture: ComponentFixture<Metronome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Metronome],
      imports: [Header],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metronome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
