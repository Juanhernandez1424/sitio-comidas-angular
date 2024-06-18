import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @ViewChild('navBar') navBar!: ElementRef;

  mostrarMenu() {
    this.navBar.nativeElement.classList.toggle('active');
  }
}
