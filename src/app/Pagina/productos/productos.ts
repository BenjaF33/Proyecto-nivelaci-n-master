import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CarritoService } from '../../servicios/carritoService';
import { FavoritoService } from '../../servicios/favorito-service';
import { ProductosService } from '../../servicios/productos-service';

@Component({
  selector: 'app-productos',
  imports: [FormsModule, RouterLink],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos implements OnInit {

  constructor(
    private carritoService: CarritoService,
    private favoritoService: FavoritoService,
    private productosService: ProductosService
  ) { }

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  buscado: string = "";

  ngOnInit(): void {
    this.productos = this.productosService.obtenerProductos();
    this.productosFiltrados = this.productos;
  }

  filtrarProductos(buscador: string) {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(buscador.toLowerCase())
    );
  }

  filtroCategoria(categoria: string): void {
    if (categoria === "todas") {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(
        producto => producto.categoria === categoria
      );
    }
  }

  filtroPrecio(filtro: string): void {
    if (filtro === "menos") {
      this.productosFiltrados = this.productos.filter(
        producto => producto.precio < 5000
      );

    } else if (filtro === "medio") {
      this.productosFiltrados = this.productos.filter(
        producto => producto.precio >= 5000 && producto.precio <= 15000
      );

    } else if (filtro === "mas") {
      this.productosFiltrados = this.productos.filter(
        producto => producto.precio > 15000
      );
    }
  }

  volverArriba() {
    window.scrollTo({
      top: 0,
    });
  }

  agregarCarrito(p: Producto) {
    console.log(p)
    this.carritoService.addProducto(p);
  }

  agregarFavorito(p: Producto) {
    this.favoritoService.addFavorito(p);
  }
}