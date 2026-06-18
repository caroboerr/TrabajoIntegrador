import { Component, inject, OnInit, output, input } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../services/usuariosService';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'lista-usuarios',
  imports: [UpperCasePipe, RouterLink],
  standalone: true,
  templateUrl: './lista-usuarios.html',
  styleUrl: '../../../app.css',
})
export class ListaUsuarios {

  usuarios = input<Usuario[]>([]);
 
  borrarUsuario = output<string>();

  borrar(id: string) {
    this.borrarUsuario.emit(id);
  }

}
