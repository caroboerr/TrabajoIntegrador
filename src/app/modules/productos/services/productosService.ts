import { Injectable } from '@angular/core';
import { Producto } from '../producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 

  private listaProductos: Producto[] = [
    {
      id: 1,
      titulo: "colchoneta",
      descripcion: "elemento para no se que",
      precio: 1000,
      descuento: 10
    },
    {
      id: 2,
      titulo: "bozu",
      descripcion: "elemento de goma",
      precio: 20,
      descuento: 15
    }
  ]

  getProductos(){
    return [...this.listaProductos]
  }
  
   addProducto(nuevo: Omit<Producto, 'id'>): void {

    const id =
      this.listaProductos.length > 0
        ? Math.max(...this.listaProductos.map(p => p.id)) + 1
        : 1;

    this.listaProductos.push({
      id,
      ...nuevo
    });

  }

  deleteProducto(id: number): void {

    this.listaProductos =
      this.listaProductos.filter(
        p => p.id !== id
      );

  }

  //Retorna el producto con id pasado como parametro. si no existe retonar "undefined"
  getProductoById(id: number): Producto | undefined {
    return this.listaProductos.find((producto) => {
      return producto.id === id
      })
  }
}