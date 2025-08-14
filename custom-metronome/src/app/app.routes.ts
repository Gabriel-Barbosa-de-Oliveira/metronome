import { Routes } from '@angular/router';
import { Metronome } from './metronome/layout/metronome/metronome';
import { NotFound } from './not-found/layout/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'metronome'
  },
  {
    path: 'metronome',
    component: Metronome
  },
  {
    path: '**',
    component: NotFound
  }
];
