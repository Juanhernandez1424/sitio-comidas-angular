import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  cardsData = [
    {
      title: 'Hamburguesa',
      option: 'Sencilla',
      description: 'Deliciosa hamburguesa clásica',
      image: '../assets/images/burger.jpg',
      precio: '15.000',
      category: 'burgers',
    },
    {
      title: 'Hamburguesa',
      option: 'Doble',
      description: 'Deliciosa hamburguesa doble',
      image: '../assets/images/burger.jpg',
      precio: '20.000',
      category: 'burgers',
    },
    {
      title: 'Pizza',
      option: 'Hawaiana',
      description: 'Deliciosa pizza Hawaiana',
      image: '../assets/images/pizza.jpg',
      precio: '15.000',
      category: 'pizzas',
    },
    {
      title: 'Pizza',
      option: 'Champiñones',
      description: 'Deliciosa pizza de champiñones',
      image: '../assets/images/pizza.jpg',
      precio: '15.000',
      category: 'pizzas',
    },
    {
      title: 'Perro Caliente',
      option: 'Sencillo',
      description: 'Delicioso perro caliente sencillo',
      image: '../assets/images/perro-caliente.jpg',
      precio: '12.000',
      category: 'perro-caliente',
    },
    {
      title: 'Perro Caliente',
      option: 'Especial',
      description: 'Delicioso perro caliente especial',
      image: '../assets/images/perro-caliente.jpg',
      precio: '13.000',
      category: 'perro-caliente',
    },
    {
      title: 'Bebida',
      option: 'Gaseosa',
      description: 'Coca-Cola',
      image: '../assets/images/coca-cola.jpg',
      precio: '3.000',
      category: 'bebidas',
    },
    {
      title: 'Bebida',
      option: 'Cerveza',
      description: 'Budweiser',
      image: '../assets/images/cerveza.jpg',
      precio: '5.000',
      category: 'bebidas',
    },
    {
      title: 'Adiciones',
      option: 'Guacamole',
      description: 'Adición de Guacamole',
      image: '../assets/images/guacamole.jpg',
      precio: '3.000',
      category: 'adiciones',
    },
    {
      title: 'Adiciones',
      option: 'Tocineta',
      description: 'Adición de Tocineta',
      image: '../assets/images/tocineta.jpg',
      precio: '4.000',
      category: 'adiciones',
    },
  ];

  filterCardsData = this.cardsData;
  categoriaSeleccionada = 'todos';

  verTodos() {
    this.categoriaSeleccionada = 'all';
    this.filterCardsData = this.cardsData;
  }

  filtroCategoria(category: string) {
    if (category == 'all') {
      this.filterCardsData = this.cardsData;
    } else {
      this.filterCardsData = this.cardsData.filter(
        (card) => card.category === category
      );
    }
  }

  mostrarBoton(categoria: string) {
    return this.categoriaSeleccionada === categoria ? 'btn-background' : '';
  }
}
