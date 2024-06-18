import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CarroService } from '../../../services/Carro.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent {
  @ViewChild('visualizarCarro') visualizarCarro!: ElementRef;

  mostrarCarroCompras() {
    this.visualizarCarro.nativeElement.classList.toggle('active');
  }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos() {}

  constructor(private carroService: CarroService) {}

  get carro() {
    return this.carroService.obtenerCarro();
  }

  eliminarProductoCarro(producto: Producto) {
    this.carroService.eliminarProducto(producto);
  }
}
