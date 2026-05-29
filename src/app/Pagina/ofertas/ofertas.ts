import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoService';
import { ProductosService } from '../../servicios/productos-service';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas implements OnInit {

  productos: Producto[] = [];

  constructor(
    private carritoService: CarritoService,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.productos = this.productosService.obtenerProductos();
  }

  precioFinal(producto: Producto): number {

    if (!producto.descuento) {
      return producto.precio;
    }
    return producto.precio - (producto.precio * producto.descuento / 100);

  }

  obtenerOfertas(): Producto[] {
    return this.productos.filter(producto => producto.descuento);
  }

  agregarProducto(producto: Producto) {
    this.carritoService.addProducto(producto);
  }
}