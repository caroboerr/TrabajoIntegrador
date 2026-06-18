import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../producto';
import { ProductosService } from '../services/productosService';

import { DescuentoPipe } from '../../../pipes/descuento-pipe';

@Component({
  selector: 'detalle-producto',
  standalone: true,
  imports:[UpperCasePipe, CurrencyPipe, DescuentoPipe, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: '../../../app.css',
})
export class DetalleProducto  implements OnInit{
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  
  private productosService = inject(ProductosService)

  producto: Producto | undefined
  errorMsg = ''

  ngOnInit(): void {
    //Acceder al userIid del producto de la URL
    const id_producto = this.route.snapshot.paramMap.get('id')
    if(id_producto){
      const id = parseInt(id_producto)

      //Llamar al metodo getUserById y obtener el producto
      this.producto = this.productosService.getProductoById(id)
      if(!this.producto){
        this.errorMsg = `Producto con ID #${id_producto} no encontrado.`
      }
    }
    else{
      this.errorMsg = 'ID del producto no especificado'
    }
  }

  volver (): void{
    this.router.navigate(['/productos'])
  }
  borrar(id: number) {
    this.productosService.deleteProducto(id);
    this.volver();
  }

}