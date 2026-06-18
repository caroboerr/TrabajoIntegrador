import { Component, inject, OnInit, input } from '@angular/core';
import { ListaUsuarios } from '../lista-usuarios/lista-usuarios';
import { Usuario } from '../usuario';
import { UsuariosService } from '../services/usuariosService';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'usuarios',
  standalone: true,
  imports: [
    RouterLink,
    ListaUsuarios
],
  templateUrl: './usuarios.html',
  styleUrl: '../../../app.css'
})
export class UsuariosComponent implements OnInit {

  listaUsuarios : Usuario[] = [];
  private usuariosService = inject(UsuariosService);

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  agregarUsuario(usuario: Usuario): void {
    this.usuariosService.addUsuario(usuario);
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.listaUsuarios = this.usuariosService.getUsuarios();
  }

  borrar(id: string): void {
    this.usuariosService.deleteUsuario(id);
    this.listaUsuarios = this.usuariosService.getUsuarios();
  }

 
}

