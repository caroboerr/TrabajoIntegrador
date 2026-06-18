import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing-module';
import { ListaProductos } from './lista-productos/lista-productos';
import { DetalleProducto } from './detalle-producto/detalle-producto';


@NgModule({
  declarations: [],
  imports: [CommonModule, ProductosRoutingModule, DetalleProducto, ListaProductos],
})
export class ProductosModule {}
