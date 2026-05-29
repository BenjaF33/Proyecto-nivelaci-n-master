import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritoService } from '../../servicios/favorito-service';
import { CarritoService } from '../../servicios/carritoService';


@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  favoritos: any[] = [];

  constructor(private favoritoService: FavoritoService, private carritoService: CarritoService) {
    this.favoritos = this.favoritoService.obtenerFavoritos();
  }


  eliminarFavorito(producto: any) {
    this.favoritoService.eliminarFavorito(producto);
    this.favoritos = this.favoritoService.obtenerFavoritos();
  }

  agregarCarrito(producto: any) {
    this.carritoService.addProducto(producto);
  }

}
