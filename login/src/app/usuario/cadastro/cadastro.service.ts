import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario2Service } from '../login/usuario2.service';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  private usuario: Usuario;
  
  constructor(
    private router: Router,
    private service: Usuario2Service
  ) { }

  cadastrarUsuario(usuario: Usuario){
    this.service.create(usuario).subscribe()
    this.router.navigate(['/login']);
  }
}
