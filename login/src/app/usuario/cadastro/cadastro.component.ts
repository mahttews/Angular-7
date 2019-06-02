import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './../usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
  }

  cadastrarUsuario(){
    console.log(this.usuario)
    this.cadastroService.cadastrarUsuario(this.usuario);
  }

}
