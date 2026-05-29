import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productos: any[] = [];


  obtenerProductos() {
    return this.productos;
  }

  addProducto(producto: any) {

    const productoExistente = this.productos.find(
      p => p.id === producto.id
    );

    if (producto.stock === 0) {
      producto.disponible = false;
      return;
    }

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.productos.push({
        ...producto,
        cantidad: 1
      });
    }

    producto.stock--;

  }

  editarProducto(accion: string, producto: any) {

    if (accion === 'sumar') {

      if (producto.stock <= 0) {
        alert('No hay más stock');
        return;
      }

      producto.cantidad += 1;
      producto.stock--;

    } else if (accion === 'restar') {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        producto.stock++;
        producto.disponible = true;
      }
    }
  }

  eliminarProducto(producto: any) {
    producto.stock += producto.cantidad;
    producto.disponible = true;
    this.productos = this.productos.filter(
      p => p.id !== producto.id
    );
  }

  vaciarCarrito() {
    this.productos = [];
  }

}
