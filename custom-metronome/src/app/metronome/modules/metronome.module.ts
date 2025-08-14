import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetronomeRoutingModule } from './metronome-routing.module';
import { Metronome } from '../layout/metronome/metronome';
import { Header } from '../../shared/components/header/header';

const COMPONENTS = [
  Metronome
]

const MODULES = [
  Header
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MetronomeRoutingModule,
    ...MODULES
  ]
})
export class MetronomeModule { }
