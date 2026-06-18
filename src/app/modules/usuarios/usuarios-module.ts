import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormUsuario } from './form-usuario/form-usuario';

@NgModule({
  declarations: [
    
  ],
  imports: [CommonModule, 
    UsuariosRoutingModule, 
    ListaUsuarios,
    DetalleUsuario,
    FormUsuario],
})
export class UsuariosModule {

}
