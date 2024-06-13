import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  pageAbout() {
    window.location.href = '/about-us';
  }
}
