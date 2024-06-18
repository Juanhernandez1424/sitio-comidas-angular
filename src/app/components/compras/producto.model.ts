import { MenuComponent } from '../../pages/menu/menu.component';

export class Producto extends MenuComponent {
  public contadorProducto = 0;

  constructor(
    public idProducto: number,
    public title: string,
    public option: string,
    public precio: string
  ) {
    super();
    this.contadorProducto = ++this.contadorProducto + idProducto;
  }
}
