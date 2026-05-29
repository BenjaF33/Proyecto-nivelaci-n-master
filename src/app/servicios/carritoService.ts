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

    const productoExistente = this.productos.find(p => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.productos.push({ ...producto, cantidad: 1 });
    }
  }

  editarProducto(accion: string, producto: any) {
    if (accion === 'sumar') {
      producto.cantidad += 1;
    } else if (accion === 'restar') {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
      }
    }
  }

  eliminarProducto(producto: any) {
    this.productos = this.productos.filter(p => p.id !== producto.id);

    console.log('Producto eliminado:', producto);
    console.log('Productos restantes:', this.productos);
  }

  vaciarCarrito() {
    this.productos = [];
  }

}
