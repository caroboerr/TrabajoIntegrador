import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { UsuariosComponent } from './usuarios/usuarios';
import { FormUsuario } from './form-usuario/form-usuario';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'alta',
    component: FormUsuario
  },
  {
    path: ':userId',
    component: DetalleUsuario
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}