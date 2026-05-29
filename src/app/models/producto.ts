export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  peso: number;
  stock: number;
  disponible: boolean;
  categoria: string;
  descuento: number;
  cantidad?: number | undefined;
}