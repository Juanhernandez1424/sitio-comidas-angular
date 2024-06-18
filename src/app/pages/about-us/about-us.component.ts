import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Comentario } from './comentario.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  txt_nombre: string = '';
  txt_correo: string = '';
  txt_comentario: string = '';

  @ViewChild('nombreInput')
  nombreInput!: ElementRef;

  comentarios: Comentario[] = [
    new Comentario('Juan', 'juan@prueba.com', 'Excelente Servicio'),
  ];

  ngOnInit(): void {
    this.mostrarComentarios();
  }

  mostrarComentarios() {}

  validarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  agregarComentario() {
    if (
      this.txt_nombre !== '' &&
      this.validarCorreo.test(this.txt_correo) &&
      this.txt_comentario !== ''
    ) {
      let comentario = new Comentario(
        this.txt_nombre,
        this.txt_correo,
        this.txt_comentario
      );
      this.comentarios.push(comentario);
      this.limpiar();
    } else {
      alert('Ingrese los datos');
      if (this.txt_nombre === '') {
        this.cambiarEstilo('.nombre', 'borderColor', 'red');
      }
      if (this.validarCorreo.test(this.txt_correo) || this.txt_correo === '') {
        this.cambiarEstilo('.correo', 'borderColor', 'red');
      }
      if (this.txt_comentario === '') {
        this.cambiarEstilo('.comentario', 'borderColor', 'red');
      }
    }
  }

  limpiar() {
    this.txt_nombre = '';
    this.cambiarEstilo('.nombre', 'borderColor', '');
    this.txt_correo = '';
    this.txt_comentario = '';
  }

  onNombreInput(event: Event) {
    // const inputElement = event.target as HTMLInputElement;
    // this.cambiarEstilo(this.nombreInput.nativeElement, 'borderColor', '');
    // if (inputElement.value.length > 0) {
    //   this.cambiarEstilo(
    //     this.nombreInput.nativeElement,
    //     'borderColor',
    //     'green'
    //   );
    // }
  }

  // Método para cambiar el valor css de un elemento
  constructor(private element: ElementRef, private render: Renderer2) {}
  cambiarEstilo(selector: string, styleProperty: string, value: string) {
    const elemento = this.element.nativeElement.querySelector(selector);
    if (elemento) {
      this.render.setStyle(elemento, styleProperty, value);
    }
  }
}
