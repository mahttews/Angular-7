import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrinquedosModule } from './brinquedos/brinquedos.module';
import { FerramentasModule } from './ferramentas/ferramentas.module';
import { CaixaDeFerramentasComponent } from './caixas/caixa-de-ferramentas/caixa-de-ferramentas.component';
import { CaixaBaguncadaComponent } from './caixas/caixa-baguncada/caixa-baguncada.component';
import { CaixaDeBriquedosComponent } from './caixas/caixa-de-briquedos/caixa-de-briquedos.component';
import { CaixasModule } from './caixas/caixas.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeBriquedosComponent,
    CaixaDeFerramentasComponent,
    CaixaBaguncadaComponent
  ],
  imports: [
    BrowserModule,
    BrinquedosModule,
    FerramentasModule,
    CaixasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
