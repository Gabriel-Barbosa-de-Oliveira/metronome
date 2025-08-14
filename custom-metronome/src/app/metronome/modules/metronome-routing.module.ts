import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Metronome } from '../layout/metronome/metronome';

const routes: Routes = [
  { path: '', component: Metronome }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetronomeRoutingModule { }
