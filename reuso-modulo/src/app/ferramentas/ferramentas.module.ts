import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarteloComponent } from './martelo/martelo.component';
import { ChaveDeFendaComponent } from './chaves/chave-de-fenda/chave-de-fenda.component';
import { ChaveInglesaComponent } from './chaves/chave-inglesa/chave-inglesa.component';
import { AlicateComponent } from './alicate/alicate.component';

@NgModule({
  declarations: [
    AlicateComponent,
    ChaveInglesaComponent,
    ChaveDeFendaComponent,
    MarteloComponent
  ],
  exports: [
    AlicateComponent,
    ChaveInglesaComponent,
    ChaveDeFendaComponent,
    MarteloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FerramentasModule { }
