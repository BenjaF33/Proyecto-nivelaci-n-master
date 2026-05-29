import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cont: number = 1;

  productos: Producto[] = [

    // CANARIAS
    { id: this.cont++, nombre: 'Canarias Tradicional', precio: 4800, imagen: 'assets/img_yerbas/canarias.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 20 },
    { id: this.cont++, nombre: 'Canarias Serena', precio: 5000, imagen: 'assets/img_yerbas/Canarias Serena.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 15 },
    { id: this.cont++, nombre: 'Canarias Edición Especial', precio: 5200, imagen: 'assets/img_yerbas/Canarias Edición Especial.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 10 },

    // PLAYADITO
    { id: this.cont++, nombre: 'Playadito Tradicional', precio: 3500, imagen: 'assets/img_yerbas/playadito.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 25 },
    { id: this.cont++, nombre: 'Playadito Despalada', precio: 3900, imagen: 'assets/img_yerbas/Playadito Despalada.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 20 },

    // TARAGUI
    { id: this.cont++, nombre: 'Taragüi Tradicional', precio: 3200, imagen: 'assets/img_yerbas/taragui.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 15 },
    { id: this.cont++, nombre: 'Taragüi Liviana', precio: 3300, imagen: 'assets/img_yerbas/Taragüi Liviana.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 10 },
    { id: this.cont++, nombre: 'Taragüi Sin Palo', precio: 3700, imagen: 'assets/img_yerbas/Taragüi Sin Palo.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 5 },

    // ROSAMONTE
    { id: this.cont++, nombre: 'Rosamonte Tradicional', precio: 3400, imagen: 'assets/img_yerbas/Rosamonte Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 10 },
    { id: this.cont++, nombre: 'Rosamonte Suave', precio: 3500, imagen: 'assets/img_yerbas/Rosamonte Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 5 },
    { id: this.cont++, nombre: 'Rosamonte Especial', precio: 3900, imagen: 'assets/img_yerbas/Rosamonte Especial.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // AMANDA
    { id: this.cont++, nombre: 'Amanda Tradicional', precio: 3000, imagen: 'assets/img_yerbas/Amanda Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Amanda Suave', precio: 3200, imagen: 'assets/img_yerbas/Amanda Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 15 },
    { id: this.cont++, nombre: 'Amanda Premium', precio: 3600, imagen: 'assets/img_yerbas/Amanda Premium.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // CBSE
    { id: this.cont++, nombre: 'CBSe Hierbas Serranas', precio: 3100, imagen: 'assets/img_yerbas/CBSe Hierbas Serranas.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'CBSe Naranja', precio: 3200, imagen: 'assets/img_yerbas/CBSe Naranja.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'CBSe Guaraná', precio: 3300, imagen: 'assets/img_yerbas/CBSe Guaraná.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // CRUZ DE MALTA
    { id: this.cont++, nombre: 'Cruz de Malta Tradicional', precio: 3400, imagen: 'assets/img_yerbas/Cruz de Malta Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // LA MERCED
    { id: this.cont++, nombre: 'La Merced Campo', precio: 4300, imagen: 'assets/img_yerbas/La Merced Campo.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'La Merced Monte', precio: 4300, imagen: 'assets/img_yerbas/La Merced Monte.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'La Merced Barbacuá', precio: 4500, imagen: 'assets/img_yerbas/La Merced Barbacuá.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // NOBLEZA GAUCHA
    { id: this.cont++, nombre: 'Nobleza Gaucha Tradicional', precio: 3200, imagen: 'assets/img_yerbas/Nobleza Gaucha Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Nobleza Gaucha Suave', precio: 3300, imagen: 'assets/img_yerbas/Nobleza Gaucha Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // SARA
    { id: this.cont++, nombre: 'Sara Tradicional', precio: 4700, imagen: 'assets/img_yerbas/Sara Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Sara Extra Suave', precio: 4800, imagen: 'assets/img_yerbas/Sara Extra Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 10 },

    // PIPORE
    { id: this.cont++, nombre: 'Piporé Tradicional', precio: 3300, imagen: 'assets/img_yerbas/Piporé Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Piporé Suave', precio: 3400, imagen: 'assets/img_yerbas/Piporé Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // ANDRESITO
    { id: this.cont++, nombre: 'Andresito Tradicional', precio: 3200, imagen: 'assets/img_yerbas/Andresito Tradicional.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Andresito Suave', precio: 3300, imagen: 'assets/img_yerbas/Andresito Suave.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // KRAUS
    { id: this.cont++, nombre: 'Kraus Orgánica', precio: 4200, imagen: 'assets/img_yerbas/Kraus Orgánica.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },
    { id: this.cont++, nombre: 'Kraus Pure Leaf', precio: 4400, imagen: 'assets/img_yerbas/Kraus Pure Leaf.png', peso: 500, stock: 10, disponible: true, categoria: 'Yerba', descuento: 0 },

    // MATES
    { id: this.cont++, nombre: 'Mate Imperial Cuero Negro', precio: 18500, imagen: 'assets/img_mates/Mate Imperial Cuero Negro.png', peso: 700, stock: 10, disponible: true, categoria: 'Mates', descuento: 0 },
    { id: this.cont++, nombre: 'Mate Camionero Algarrobo', precio: 14500, imagen: 'assets/img_mates/Mate Camionero Algarrobo.png', peso: 650, stock: 10, disponible: true, categoria: 'Mates', descuento: 0 },
    { id: this.cont++, nombre: 'Mate Torpedo Premium', precio: 21000, imagen: 'assets/img_mates/Mate Torpedo Premium.png', peso: 750, stock: 10, disponible: true, categoria: 'Mates', descuento: 0 },
    { id: this.cont++, nombre: 'Mate de Acero Inoxidable', precio: 9500, imagen: 'assets/img_mates/Mate de Acero Inoxidable.png', peso: 500, stock: 10, disponible: true, categoria: 'Mates', descuento: 0 },

    // BOMBILLAS
    { id: this.cont++, nombre: 'Bombilla Pico de Loro', precio: 4500, imagen: 'assets/img_bombillas/Bombilla Pico de Loro.png', peso: 150, stock: 10, disponible: true, categoria: 'Bombillas', descuento: 0 },
    { id: this.cont++, nombre: 'Bombilla Acero Quirúrgico', precio: 5200, imagen: 'assets/img_bombillas/Bombilla Acero Quirúrgico.png', peso: 180, stock: 10, disponible: true, categoria: 'Bombillas', descuento: 0 },
    { id: this.cont++, nombre: 'Bombilla Resorte Premium', precio: 3900, imagen: 'assets/img_bombillas/Bombilla Resorte Premium.png', peso: 140, stock: 10, disponible: true, categoria: 'Bombillas', descuento: 0 },

    // TERMOS
    { id: this.cont++, nombre: 'Termo Stanley Verde', precio: 45000, imagen: 'assets/img_termos/Termo Stanley Verde 1L.png', peso: 1, stock: 10, disponible: true, categoria: 'Termos', descuento: 0 },
    { id: this.cont++, nombre: 'Termo Lumilagro Acero', precio: 18500, imagen: 'assets/img_termos/Termo Lumilagro Acero.png', peso: 1, stock: 10, disponible: true, categoria: 'Termos', descuento: 0 },
    { id: this.cont++, nombre: 'Termo Bala Acero Negro', precio: 16000, imagen: 'assets/img_termos/Termo Bala Acero Negro.png', peso: 1, stock: 10, disponible: true, categoria: 'Termos', descuento: 0 },

  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

}