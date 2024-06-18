import { Component, Input } from '@angular/core';
import { Producto } from '../compras/producto.model';
import { CarroService } from '../../../services/Carro.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() card: any;

  constructor(private carroService: CarroService) {}

  agregarProductoCarro() {
    let producto = new Producto(
      this.card.idProducto,
      this.card.title,
      this.card.option,
      this.card.precio
    );

    this.carroService.agregarProducto(producto);
  }
}
