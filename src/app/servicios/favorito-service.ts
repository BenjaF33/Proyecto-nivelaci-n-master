import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {

  favoritos: any[] = [];


  obtenerFavoritos() {
    return this.favoritos;
  }

  addFavorito(producto: any) {
    const productoExistente = this.favoritos.find(p => p.id === producto.id);

    if (!productoExistente) {
      this.favoritos.push(producto);
    }

    console.log('Producto agregado a favoritos:', producto);
    console.log('Lista de favoritos:', this.favoritos);
  }

  eliminarFavorito(producto: any) {
    this.favoritos = this.favoritos.filter(p => p.id !== producto.id);
    console.log('Producto eliminado de favoritos:', producto);
    console.log('Lista de favoritos:', this.favoritos);
  }


}
