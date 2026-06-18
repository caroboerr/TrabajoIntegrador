import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 

  private listaUsuarios: Usuario[] = [
    {
      userId: "juan.gomez",
      nombre: "Juan Gómez",
      email: "sarasa@gmail.com",
      rol: "Usuario",
      activo: true
    },
    {
      userId: "maria.fernandez",
      nombre: "María Fernandez",
      email:"mariafermandez@algo.com",
      rol: "Administrador",
      activo: true
    }
  ]

  getUsuarios(){
    return [...this.listaUsuarios]
  }
  
  //Agrega un nuevo usuario a la lista
  addUsuario(nuevo: Usuario): void {
    this.listaUsuarios.push(nuevo);
  }

  //Borra el usuario con userId enviado como parámetro. 
  deleteUsuario(userId: string): void {
    this.listaUsuarios =
      this.listaUsuarios.filter(
        p => p.userId !== userId
      );
    }

    //Retorna el usuario con id pasado como parametro. si no existe retonar "undefined"
    getUsuarioById(id: string): Usuario | undefined {
        return this.listaUsuarios.find((usuario) => {
            return usuario.userId === id
        })
    }

   actualizar(usuario: Usuario): void {
    if (usuario){
        this.deleteUsuario(usuario.userId);
        this.listaUsuarios.push(usuario);
      }
    }
 
}