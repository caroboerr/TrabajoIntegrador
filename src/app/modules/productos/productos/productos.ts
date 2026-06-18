import { Component, inject, OnInit, input } from '@angular/core';
import { ListaProductos } from '../lista-productos/lista-productos';
import { Producto } from '../producto';
import { ProductosService } from '../services/productosService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'productos',
  standalone: true,
  imports: [
    RouterLink,
    ListaProductos
],
  templateUrl: './productos.html',
  styleUrl: '../../../app.css'
})
export class ProductosComponent implements OnInit {

  listaProductos : Producto[] = [];

  private productosService = inject(ProductosService);

  ngOnInit(): void {
    this.cargarProductos();
  }

  agregarProducto(producto: Producto): void {
    this.productosService.addProducto(producto);
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.listaProductos = this.productosService.getProductos();
  }

  borrar(id: number): void {
    this.productosService.deleteProducto(id);
    this.cargarProductos();
  }

 
}

