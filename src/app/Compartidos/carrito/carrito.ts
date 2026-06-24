import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarritoService } from '../../servicios/carritoService';

import { Producto } from '../../models/producto';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})

export class Carrito implements OnInit {

  productos: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos();
    this.actualizarTotal();
  }

  subtotal(producto: Producto): number {

    let precioFinal = producto.precio;

    if (producto.descuento && producto.descuento > 0) {

      precioFinal =
        producto.precio -
        (producto.precio * producto.descuento / 100);

    }

    return precioFinal * producto.cantidad!;

  }

  actualizarTotal(): void {
    this.total = this.productos.reduce(
      (total, producto) => total + this.subtotal(producto),
      0
    );
  }

  eliminarProducto(producto: any) {
    this.carritoService.eliminarProducto(producto);
    this.productos = this.carritoService.obtenerProductos();
    this.actualizarTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productos = [];
    this.actualizarTotal();
  }

  editarProducto(accion: string, producto: any) {
    this.carritoService.editarProducto(accion, producto);
    this.actualizarTotal();
  }

  finalizarCompra() {
    if (this.productos.length > 0) {
      alert('Compra finalizada con éxito');
      this.vaciarCarrito();
    } else {
      alert('El carrito está vacío. No se puede finalizar la compra.');
    }
  }

}