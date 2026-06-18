import { Component, inject, input, output } from '@angular/core';

import { Producto } from '../producto';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { DescuentoPipe } from '../../../pipes/descuento-pipe';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../services/productosService';


@Component({
  selector: 'lista-productos',
  standalone: true,
  imports: [DescuentoPipe, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './lista-productos.html',
  styleUrl: '../../../app.css',
})

export class ListaProductos {

  productos = input<Producto[]>([]);
  borrarProducto = output<number>();

  borrar(id: number) {
    this.borrarProducto.emit(id);
  }
}

