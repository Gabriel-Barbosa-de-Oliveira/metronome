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
    loadChildren: () =>
      import('./metronome/modules/metronome.module')
        .then(m => m.MetronomeModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/modules/not-found.module')
        .then(m => m.NotFoundModule)
  }
];
