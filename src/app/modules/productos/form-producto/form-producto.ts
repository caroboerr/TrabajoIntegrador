import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../services/productosService';
import { Producto } from '../producto';
import { Router } from '@angular/router';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'form-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-producto.html',
  styleUrl: '../../../app.css'
})
export class FormProducto {

  formulario : FormGroup;
  private productosService = inject(ProductosService);
  
  private router = inject(Router)
      
  constructor (private fb: FormBuilder){
    this.formulario = this.fb.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      precio: [null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      descuento: [null, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern(/^\d+$/)]]
    })
  }
  

 enviar() {

    const producto: Omit<Producto, 'id'> = {
      titulo: this.formulario.value.titulo,
      descripcion: this.formulario.value.descripcion,
      precio: this.formulario.value.precio,
      descuento: this.formulario.value.descuento
    };

    this.productosService.addProducto(producto);
    this.irADetalle(this.formulario.value.id);
  }

  cancelar(){
    this.formulario.reset();
  }

  volver (): void{
    this.router.navigate(['/productos'])
  }
  
  irADetalle (id: number): void{
    this.router.navigate(['/productos/'+id])
  }

  

}
