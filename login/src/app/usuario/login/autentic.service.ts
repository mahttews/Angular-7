import { Usuario2Service } from './usuario2.service';
import { Injectable } from '@angular/core';

import { Usuario } from './../usuario';
import { Router } from '@angular/router';
// import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AutenticService {

  private usuarioAutenticado: boolean = false;

  private usuarios: Usuario[];


  constructor(
    private router: Router,
    private service: Usuario2Service
    ) { }




  
  fazerLogin(usuario: Usuario){
    this.service.listar().subscribe(res => {
      this.usuarios = res;

      this.usuarios.forEach((usuarioDb) => {
        if(usuario.nome == usuarioDb.nome && usuario.senha == usuarioDb.senha){
          this.usuarioAutenticado = true;
          console.log('Usuario autenticado com sucesso');
          this.router.navigate(['/home']);
        }
      })
    })
  }
}

// fazerLogin(usuario: Usuario){

  //   if(usuario.nome === 'mateus@email.com' && usuario.senha === '123123'){
  //     this.usuarioAutenticado = true;
  //     console.log('Usuario autenticado com sucesso');
  //     this.router.navigate(['/']);
  //   }
  // }
  
  // fazerLogin(usuario: Usuario){
  //   console.log(this.usuarios)
  //   for(let i = 0; i<this.usuarios.length; i++){
  //     if(usuario.nome == this.usuarios[i].nome && usuario.senha == this.usuarios[i].senha){
  //       this.usuarioAutenticado = true;
  //       console.log('Usuario autenticado com sucesso');
  //       this.router.navigate(['/home']);
  //     }
  //   }
  // }
