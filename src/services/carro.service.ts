import { Injectable } from '@angular/core';
import { Producto } from '../app/components/compras/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private carro: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.carro.push(producto);
  }

  eliminarProducto(producto: Producto) {
    let eliminarProductoCarro = this.carro.findIndex(
      (p) => p.idProducto === producto.idProducto
    );
    this.carro.splice(eliminarProductoCarro, 1);
  }

  obtenerCarro(): Producto[] {
    return this.carro;
  }
}
