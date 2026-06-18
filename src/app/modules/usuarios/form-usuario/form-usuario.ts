import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../services/usuariosService';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'form-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-usuario.html',
  styleUrl: '../../../app.css'
})
export class FormUsuario {

  formulario : FormGroup;
    
  constructor (private fb: FormBuilder){
    this.formulario = this.fb.group({
        userId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        email:  ['', [Validators.required, Validators.email]],
        rol:    ['', [Validators.required]],
        activo: [true]
      });

  }



  private usuariosService = inject(UsuariosService);
  private router = inject(Router)
  
 enviar() {
  
    const usuario: Usuario = {
      userId: this.formulario.value.userId,
      nombre: this.formulario.value.nombre,
      email: this.formulario.value.email,
      rol: this.formulario.value.rol,
      activo: this.formulario.value.activo
    };
    this.usuariosService.addUsuario(usuario);
    this.irADetalle(this.formulario.value.userId);
  }

  cancelar(){
    this.formulario.reset();
  }

  volver (): void{
    this.router.navigate(['/usuarios'])
  }
  
  irADetalle (userId: string): void{
    this.router.navigate(['/usuarios/'+userId])
  }

}
