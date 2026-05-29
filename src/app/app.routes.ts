import { Routes } from '@angular/router';
import { Contactos } from './Pagina/contactos/contactos';
import { Inicio } from './Pagina/inicio/inicio';

import { Ofertas } from './Pagina/ofertas/ofertas';
import { Carrito } from './Compartidos/carrito/carrito';
import { Favoritos } from './Compartidos/favoritos/favoritos';
import { InicioSesion } from './Auth/inicio-sesion/inicio-sesion';
import { Registro } from './Auth/registro/registro';
import { Productos } from './Pagina/productos/productos';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    //pagina
    { path: 'inicio', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'contactos', component: Contactos },
    { path: 'ofertas', component: Ofertas },

    //compartidos
    { path: 'carrito', component: Carrito },
    { path: 'favoritos', component: Favoritos },

    //auth
    { path: 'inicio-sesion', component: InicioSesion },
    { path: 'registro', component: Registro },

    { path: '**', redirectTo: 'inicio' },





];
