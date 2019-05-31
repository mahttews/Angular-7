import { BolaComponent } from './bola/bola.component';
import { BonecaComponent } from './boneca/boneca.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarrinhoComponent,
    BonecaComponent,
    BolaComponent
  ],
  exports: [
    CarrinhoComponent,
    BonecaComponent,
    BolaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BrinquedosModule { }
