import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';


export const routes: Routes = [
    {
        //En la ruta principal mostramos la pagina principal
        path: '',
        component: HomeComponent
    },
    {
        path: 'usuarios',
        //Solo cargamos el usuariosModule cuando el usuario se encuentre en la ruta de usuarios
        loadChildren: () => import('./modules/usuarios/usuarios-module').then(
            (modules) => modules.UsuariosModule
        )
        
    },
    {
        path: 'productos',
        //Solo cargamos el productosModule cuando el usuario se encuentre en la ruta de productos
        loadChildren: () => import('./modules/productos/productos-module').then(
            (modules) => modules.ProductosModule
        )
        
    },
    {
        //Si entran a una ruta no existente enviar a direccion principal
        path: '**',
        redirectTo: ''
    }
];