import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { FormProducto } from './form-producto/form-producto';
import { ProductosComponent } from './productos/productos';


const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
      path: 'alta',
      component: FormProducto
  },
  {
    path: ':id',
    component: DetalleProducto
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {
  
}


