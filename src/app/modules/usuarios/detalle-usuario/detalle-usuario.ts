import { Component, inject, OnInit, output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from '../services/usuariosService';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'detalle-usuario',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './detalle-usuario.html',
  styleUrl: '../../../app.css',
})
export class DetalleUsuario  implements OnInit{
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  
  private usuariosService = inject(UsuariosService)

  usuario: Usuario | undefined
  errorMsg = ''

  borrar(id: string) {
    this.usuariosService.deleteUsuario(id);
    this.volver();
  }

  ngOnInit(): void {
    const id_user_param = this.route.snapshot.paramMap.get('userId')
    if(id_user_param){
      this.usuario = this.usuariosService.getUsuarioById(id_user_param)
      if(!this.usuario){
        this.errorMsg = `Usuario #${id_user_param} no encontrado.`
      }
    }
    else{
      this.errorMsg = 'ID del usuario no especificado'
    }
  }

  volver (): void{
    this.router.navigate(['/usuarios'])
  }

  cambiarEstado(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (this.usuario) {
      this.usuario.activo = checked;
      // Si tenés un servicio:
      this.usuariosService.actualizar(this.usuario);
   
  }
}

}